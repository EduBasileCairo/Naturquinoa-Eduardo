import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent {
  sexo: string = '1';
  peso: number = 3;
  altura: number = 40;
  edad: number = 0;
  resultadoMasaCorporal: string = '';
  resultadoPorcentajeGrasa: string = '';
  resultadoTablaOms: string = '';

  calcularMasaCorporal() {
    // var peso = parseFloat(document.getElementById("peso").value);
    // var altura = parseFloat(document.getElementById("altura").value) / 100;
    // var edad = parseFloat(document.getElementById("edad").value);
    // var sexo = document.getElementById("sexo").value;
    var masaCorporal = this.peso / (this.altura * this.altura);
    console.log("Su masa corporal es " + masaCorporal.toFixed(2));
    var resultadoMasaCorporal = document.getElementById("masaCorporal");
    resultadoMasaCorporal?.textContent = "Índice de Quetelet. Su masa corporal es: " + masaCorporal.toFixed(2);
    var porcentajeGrasa = masaCorporal * 1.2 + 0.23 * this.edad - 10.8 * parseFloat(this.sexo) - 5.4;
    console.log(porcentajeGrasa);
    var resultadoPorcentajeGrasa = document.getElementById("porcentajeGrasa");
    resultadoPorcentajeGrasa?.textContent = "El porcentaje de grasa es: " + porcentajeGrasa.toFixed(2);
    var resultadotablaOms = document.getElementById("tablaOms");
    resultadotablaOms?.textContent = "Consulte en la siguiente tabla elaborada por la O.M.S. en qué clasificación recae su índice de masa corporal. Es recomendable abordar el tratamiento de los desvíos con el asesoramiento de un profesional de la salud.";
    // Implementar la lógica de cálculo aquí, similar al script.js
    // Utilizar this.sexo, this.peso, this.altura, this.edad para obtener los valores
    // Actualizar this.resultadoMasaCorporal, this.resultadoPorcentajeGrasa, this.resultadoTablaOms
  }
}
