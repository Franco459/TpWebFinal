<?php

namespace ConcesionariaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Reserva
 *
 * @ORM\Table(name="reserva")
 * @ORM\Entity(repositoryClass="ConcesionariaBundle\Repository\ReservaRepository")
 */
class Reserva
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
     * @var int
     *
     * @ORM\Column(name="dias", type="integer")
     */
    private $dias;

    /**
     * @var int
     *
     * @ORM\Column(name="costoRenta", type="integer")
     */
    private $costoRenta;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fechaRenta", type="date")
     */
    private $fechaRenta;

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
     * Set dias
     *
     * @param integer $dias
     *
     * @return Reserva
     */
    public function setDias($dias)
    {
        $this->dias = $dias;

        return $this;
    }

    /**
     * Get dias
     *
     * @return int
     */
    public function getDias()
    {
        return $this->dias;
    }

    /**
     * Set costoRenta
     *
     * @param integer $costoRenta
     *
     * @return Reserva
     */
    public function setCostoRenta($costoRenta)
    {
        $this->costoRenta = $costoRenta;

        return $this;
    }

    /**
     * Get costoRenta
     *
     * @return int
     */
    public function getCostoRenta()
    {
        return $this->costoRenta;
    }

    /**
     * Set fechaRenta
     *
     * @param \DateTime $fechaRenta
     *
     * @return Reserva
     */
    public function setFechaRenta($fechaRenta)
    {
        $this->fechaRenta = $fechaRenta;

        return $this;
    }

    /**
     * Get fechaRenta
     *
     * @return \DateTime
     */
    public function getFechaRenta()
    {
        return $this->fechaRenta;
    }

    /**
     * Set estado
     *
     * @param string $estado
     *
     * @return Reserva
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
}
