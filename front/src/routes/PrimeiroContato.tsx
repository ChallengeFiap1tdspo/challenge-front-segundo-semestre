import { useEffect } from "react";

export default function PrimeiroContato(){
      useEffect(() => {
        document.title = "PrimeiroContato";
      }, []);

    return(
        <main>
            <h1>PrimeiroContato</h1>
        </main>
    );
}