<?php

namespace ConcesionariaBundle\Controller;

use ConcesionariaBundle\Entity\Novedad;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

/**
 * Novedad controller.
 *
 * @Route("novedad")
 */
class NovedadController extends Controller
{
    /**
     * Lists all novedad entities.
     *
     * @Route("/", name="novedad_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $novedades = $em->getRepository('ConcesionariaBundle:Novedad')->findAll();
        $response = new Response();
        $encoders = array(new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(
        'inscripciones' => $serializer->serialize($novedad, 'json'),
        )));
        return $this->render('novedad/index.html.twig', array(
            'novedads' => $novedades,
        ));
    }

    /**
     * Creates a new novedad entity.
     *
     * @Route("/new", name="novedad_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $novedad = new Novedad();
        
        $novedad->setTexto($request->request->get('texto'));
        $novedad->setNovedad($request->request->get('estado'));
        $usuariosArray = $request->request->get('usuario');
        $idUsuario = $usuariosArray['id'];
        $em = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository("ConcesionariaBundle:Usuario")->find($idUsuario);
        $novedad->setUsuario($usuario);

        $em->persist($inscripcion);
        $em->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Finds and displays a novedad entity.
     *
     * @Route("/{id}", name="novedad_show")
     * @Method("GET")
     */
    public function showAction(Novedad $novedad)
    {
        $deleteForm = $this->createDeleteForm($novedad);

        return $this->render('novedad/show.html.twig', array(
            'novedad' => $novedad,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing novedad entity.
     *
     * @Route("/{id}/edit", name="novedad_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Novedad $novedad)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $sn = $this->getDoctrine()->getManager();
        $nov = $sn->getRepository('ConcesionariaBundle:Novedad')->find($request->request->get('id'));

        $nov->setTexto($request->request->get('texto'));
        $nov->setEstado($request->request->get('estado'));

        $usuariosArray= $request->request->get('Usuario');
        $idUsuario = $usuariosArray['id'];
       // $em = $this->getDoctrine()->getManager();
        $usu = $sn->getRepository("ConcesionariaBundle:Usuarios")->find($idUsuario);
        $nov->setUsuario($usu);
       
        $sn->flush();

        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Deletes a novedad entity.
     *
     * @Route("/{id}", name="novedad_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Novedad $novedad)
    {
        $sn = $this->getDoctrine()->getManager();
    
        $cat = $this->getDoctrine()->getRepository('ConcesionariaBundle:Novedad')->find($id);
        $sn->remove($cat);
        $sn->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);;
    }

    /**
     * Creates a form to delete a novedad entity.
     *
     * @param Novedad $novedad The novedad entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Novedad $novedad)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('novedad_delete', array('id' => $novedad->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
