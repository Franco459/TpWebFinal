<?php

namespace ConcesionariaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Novedad
 *
 * @ORM\Table(name="novedad")
 * @ORM\Entity(repositoryClass="ConcesionariaBundle\Repository\NovedadRepository")
 */
class Novedad
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;
         /**
     * @ORM\ManyToOne(targetEntity="Usuario")
     * @ORM\JoinColumn(name="usuario", referencedColumnName="id")
     */
    private $usuario;
    /**
     * @var string
     *
     * @ORM\Column(name="texto", type="string", length=255)
     */
    private $texto;  
    
    /**
     * @var string
     *
     * @ORM\Column(name="estado", type="string", length=255)
     */
    private $estado;
    

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }
        /**
     * Set text
     *
     * @param string $texto
     *
     * @return Novedad
     */
    public function setTexto($texto)
    {
        $this->texto = $texto;

        return $this;
    }

    /**
     * Get texto
     *
     * @return string
     */
    public function getTexto()
    {
        return $this->texto;
    }
        /**
     * Set estado
     *
     * @param string $estado
     *
     * @return Novedad
     */
    public function setEstado($estado)
    {
        $this->estado = $estado;

        return $this;
    }

    /**
     * Get estado
     *
     * @return string
     */
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set usuario
     *
     * @param \ConcesionariaBundle\Entity\Usuario $usuario
     *
     * @return Novedad
     */
    public function setUsuario(\ConcesionariaBundle\Entity\Usuario $usuario = null)
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * Get usuario
     *
     * @return \ConcesionariaBundle\Entity\Usuario
     */
    public function getUsuario()
    {
        return $this->usuario;
    }
}
