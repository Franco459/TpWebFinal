<?php

namespace ConcesionariaBundle\Controller;

use ConcesionariaBundle\Entity\Usuario;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/* Includes */
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
/**
 * Usuario controller.
 *
 * @Route("usuario")
 */
class UsuarioController extends Controller
{



   /**
     * Validate user.
     *
     * @Route("/authenticate", name="usuario_authenticate")
     * @Method({"GET", "POST"})
     */
    public function authenticateAction(Request $request)
    {

        
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        //creamos un usuario
        $username = $request->request->get('username');
        $userpassword = $request->request->get('password');


        $criteria = array('usuario' => $username, 'password' => $userpassword);
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository("ConcesionariaBundle:Usuario")->findBy($criteria);
		
        if($user != null){
            $result['status'] = 'ok';
            $result['username'] = $user[0]->getUsuario();
            $result['perfil'] = $user[0]->getPerfil();
            $result['email'] = $user[0]->getEmail();
            $result['telefono'] = $user[0]->getTelefono();
            $result['apellido'] = $user[0]->getApellido();
            $result['nombres'] = $user[0]->getNombres();
            $result['id'] = $user[0]->getId();
        }else{
            $result['status'] = 'bad';
            $result['username'] = '';
        }
		return new Response(json_encode($result), 200);	
    }



    /**
     * Lists all usuario entities.
     *
     * @Route("/", name="usuario_index")
     * @Method("GET")
     */


    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository('ConcesionariaBundle:Usuario')->findAll();
        $response = new Response();
        $encoders = array(new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(
        'usuarios' => $serializer->serialize($usuario, 'json'),
        )));
        $response->headers->set('Content-Type', 'application/json');
        return $response; 
    }

    /**
     * Creates a new usuario entity.
     *
     * @Route("/new", name="usuario_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
       
        $usuario = new Usuario();
        $usuario->setNombres($request->request->get('nombres'));
        $usuario->setApellido($request->request->get('apellido'));
        $usuario->setUsuario($request->request->get('usuario'));
       $usuario ->setDni($request->request->get('dni'));
       $usuario ->setEmail($request->request->get('email'));
        $usuario->setTelefono($request->request->get('telefono'));
        $usuario->setPassword($request->request->get('password'));
        $usuario->setPerfil($request->request->get('perfil'));        
       
        $em->persist($usuario);
        $em->flush();
       
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Finds and displays a usuario entity.
     *
     * @Route("/{id}", name="usuario_show")
     * @Method("GET")
     */
    public function showAction(Usuario $usuario)
    {
        $deleteForm = $this->createDeleteForm($usuario);

        return $this->render('usuario/show.html.twig', array(
            'usuario' => $usuario,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing usuario entity.
     *
     * @Route("/{id}/edit", name="usuario_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Usuario $usuario)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $sn = $this->getDoctrine()->getManager();
        $usu = $sn->getRepository('ConcesionariaBundle:Usuario')->find($request->request->get('id'));

        $usu->setNombres($request->request->get('nombres'));
        $usu->setApellido($request->request->get('apellido'));
        $usu->setDni($request->request->get('dni'));
        $usu->setEmail($request->request->get('email'));
        $usu->setTelefono($request->request->get('telefono'));
        $usu->setUsuario($request->request->get('usuario'));
        $usu->setPassword($request->request->get('password'));
        $usu->setPerfil($request->request->get('perfil'));    
        $sn->flush();

        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Deletes a usuario entity.
     *
     * @Route("/{id}", name="usuario_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Usuario $usuario)
    {
        $sn = $this->getDoctrine()->getManager();
    
        $cat = $this->getDoctrine()->getRepository('ConcesionariaBundle:Usuario')->find($id);
        $sn->remove($cat);
        $sn->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);}

    /**
     * Creates a form to delete a usuario entity.
     *
     * @param Usuario $usuario The usuario entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Usuario $usuario)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('usuario_delete', array('id' => $usuario->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
