//process.stdin // Recebe de entrada no terminal
//.pipe(process.stdout); //aqui encaminho(PIPE) para uma saida (stdout é uma stream de saida)

import { Readable } from "node:stream";

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

new OneToHundredStream().pipe(process.stdout);
