/* #1: CALCULAR EL IVA DE UN PRODUCTO CON DATOS DADOS: COSTO 200 CORDOBAS, IVA 15% */

    function calcularTotalConIva() {
      const precio = parseFloat(document.getElementById('precioinicial').value);
      const iva = parseFloat(document.getElementById('IVAProducto').value);
      const total = precio + (precio * iva / 100);
      document.getElementById('CostoFinal').textContent =
        'El total a pagar es: C$ ' + total.toFixed(2) + ' córdobas.';
    }



/* #2: AREA Y PERIMETRO DE UN CUADRADO DATOS DATOS: LADO 40, PERIMETRO 160 */
    function calcularLADOSdelCuadrado() {
  const lado = parseFloat(document.getElementById('lados').value);
  const perimetro = lado * 4;
  const area = lado * lado;

  const resultado = `
    El perímetro es: ${perimetro} cm<br>
    El área total del cuadrado es: ${area} cm²
  `;

  document.getElementById('resultado').innerHTML = resultado;
}


/* #3: SALUDO INTERCTIVO CON PROMPT PARA QUE SALGA UNA VENTANA EN LA CUAL ESCRIBIR EL NOMBRE  */
 function saludar() {
      const nombre = prompt("BIENVENIDO!, ingresa tu nombre, o Apodo preferido, por favor:");
      if(nombre && nombre.trim() !== "") {
        document.getElementById('mensaje').textContent = `Holaaa, ${nombre.trim()}!`;
      } else {
        document.getElementById('mensaje').textContent = "No escribiste ni ingresaste nada.😒 NO HAY SALUDO PARA TI!";
      }
    }

/* #4: CALCULAR EL DATO MEDIO DE LOS 3 NUM INGRESADOS*/
    function calcularMedia() {
      const n1 = parseFloat(document.getElementById("num1").value);
      const n2 = parseFloat(document.getElementById("num2").value);
      const n3 = parseFloat(document.getElementById("num3").value);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultadomedia").textContent = "Por favor, ingresa los tres números.";
        return;
      }

      const media = (n1 + n2 + n3) / 3;
      document.getElementById("resultadomedia").textContent =
        `La media de los números es: ${media.toFixed(2)}`;
    }


    /* #5: CONSUMO DE COMBUSTIBLE POR KILOMETRO*/
 function calcularConsumoPersonalizado() {
      const litros = parseFloat(document.getElementById("litrosUsados").value);
      const kilometros = parseFloat(document.getElementById("kmsRecorridos").value);
      const resultado = document.getElementById("resultadodelconsumo");

      if (isNaN(litros) || isNaN(kilometros) || kilometros <= 0) {
        resultado.textContent = "Por favor, ingresa valores válidos y asegúrate de que los kilómetros no sean cero.";
        return;
      }

      const consumo = litros / kilometros;

      resultado.textContent = `Tu coche consumió ${consumo.toFixed(3)} litros por cada kilómetro recorrido.`;
    }

    /* #6:  CONVERSION  */
        function convertirASegundos() {
      const horas = parseInt(document.getElementById("horas").value);
      const minutos = parseInt(document.getElementById("minutos").value);
      const resultado = document.getElementById("resultadodeconversion");

      if (isNaN(horas) || isNaN(minutos) || horas < 0 || minutos < 0) {
        resultado.textContent = "Por favor, ingresa valores válidos para horas y minutos.";
        return;
      }

      const totalSegundos = (horas * 60 + minutos) * 60;

      resultado.textContent = `El total son: ${totalSegundos} segundos.`;
    }

    /* #7: UNIDADES Y DECENAS*/
        function cifrasseparadas(){
            const numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);
            const mensaje = document.getElementById("resultadodecifras");

             if (isNaN(numeroIngresado) || numeroIngresado < 10 || numeroIngresado > 99) {
        mensaje.textContent = "Por favor, ingresa un número de dos cifras (10 a 99).";
        return;
      }

      const cantidadDecenas = Math.floor(numeroIngresado / 10);
      const cantidadUnidades = numeroIngresado % 10;

      mensaje.textContent = `Decenas: ${cantidadDecenas} | Unidades: ${cantidadUnidades}`;
    }
        