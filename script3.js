const cursos = [
    ["Engenharia Civil", "Exatas"],
    ["Ciência da Computação", "Exatas"],
    ["Matemática", "Exatas"],

    ["Direito", "Humanas"],
    ["História", "Humanas"],
    ["Geografia", "Humanas"],

    ["Medicina", "Natureza"],
    ["Biologia", "Natureza"],
    ["Enfermagem", "Natureza"],

    ["Letras", "Linguagens"],
    ["Jornalismo", "Linguagens"],
    ["Publicidade", "Linguagens"]
];

const areaSelect = document.getElementById("area");
const resultado = document.getElementById("resultado");

areaSelect.addEventListener("change", () => {

    resultado.innerHTML = "";

    const areaEscolhida = areaSelect.value;

    if (areaEscolhida === "") {
        return;
    }

    const cursosFiltrados = cursos.filter(
        curso => curso[1] === areaEscolhida
    );

    if (cursosFiltrados.length === 0) {
        resultado.innerHTML =
            "<p>Nenhum curso encontrado para esta área.</p>";
        return;
    }

    const lista = document.createElement("ul");

    cursosFiltrados.forEach(curso => {
        const item = document.createElement("li");
        item.textContent = curso[0];
        lista.appendChild(item);
    });

    resultado.appendChild(lista);
});