//process.stdin // Recebe de entrada no terminal
//.pipe(process.stdout); //aqui encaminho(PIPE) para uma saida (stdout é uma stream de saida)

import { Readable, Transform, Writable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    // esse método retorna quais são os dados dessa stream
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(transformed.toString()))
    }
}

class MultipleByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback() //Encerrar tudo após ser executado
    }
}

new OneToHundredStream() // Stream de leitura conseguimos apenas ler dados
.pipe(new InverseNumberStream()) // Stream de transformação obrigatoriamente precisa ler dados de algum lugar e escrever dados para outro lugar
.pipe(new MultipleByTenStream()); // Stream de escrita só conseguimos escrever dados para ela
