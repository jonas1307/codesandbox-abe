const http = require("http");
const url = require("url");
const { createHash } = require("crypto");

const calculateHash = (str) => {
  const hash = createHash("sha256");
  hash.update(str);
  return hash.digest("hex");
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const resultados = {
    pessoas: [
      { id: 1, nome: "Marcelo" },
      { id: 2, nome: "João" },
      { id: 3, nome: "Maria" },
    ],
    carros: [
      { id: 1, modelo: "Fusca" },
      { id: 2, modelo: "Gol" },
      { id: 3, modelo: "Palio" },
    ],
    animais: [
      { id: 1, nome: "Cachorro" },
      { id: 2, nome: "Gato" },
      { id: 3, nome: "Papagaio" },
    ],
  };

  const urlSegments = parsedUrl.href.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];

  const controller = parseInt(lastSegment)
    ? urlSegments[urlSegments.length - 2]
    : lastSegment;

  if (controller === "pessoas") {
    var data = parseInt(lastSegment)
      ? resultados["pessoas"].filter((x) => x.id === parseInt(lastSegment))
      : resultados["pessoas"];

    if (req.headers["if-none-match"] === calculateHash(JSON.stringify(data))) {
      res.writeHead(304);
      res.end();
      return;
    }

    res.writeHead(200, {
      "cache-control": "max-age=20, must-revalidate",
      "content-type": "application/json",
      etag: calculateHash(JSON.stringify(data)),
    });

    res.end(JSON.stringify(data));
    return;
  } else if (controller === "carros") {
    var data = parseInt(lastSegment)
      ? resultados["carros"].filter((x) => x.id === parseInt(lastSegment))
      : resultados["carros"];
    if (req.headers["if-none-match"] === calculateHash(JSON.stringify(data))) {
      res.writeHead(304);
      res.end();
      return;
    }

    res.writeHead(200, {
      "cache-control": "max-age=20, must-revalidate",
      "content-type": "application/json",
      etag: calculateHash(JSON.stringify(data)),
    });

    res.end(JSON.stringify(data));
    return;
  } else if (controller === "animais") {
    var data = parseInt(lastSegment)
      ? resultados["animais"].filter((x) => x.id === parseInt(lastSegment))
      : resultados["animais"];
    if (req.headers["if-none-match"] === calculateHash(JSON.stringify(data))) {
      res.writeHead(304);
      res.end();
      return;
    }

    res.writeHead(200, {
      "cache-control": "max-age=20, must-revalidate",
      "content-type": "application/json",
      etag: calculateHash(JSON.stringify(data)),
    });

    res.end(JSON.stringify(data));
    return;
  } else {
    if (req.headers["if-none-match"] === calculateHash(createpage(2))) {
      res.writeHead(304);
      res.end();
      return;
    }
    res.writeHead(200, {
      "cache-control": "max-age=10, must-revalidate",
      "content-type": "application/json",
      etag: calculateHash(createpage(2)),
    });
    res.end(createpage(2));
  }
});

const createpage = (page) => {
  return `<html>
	<head>
		<title>Page ${page}</title>
	</head>
	<body>
		<h1>Trabalho Prático 1</h1>
	</body>
</html> 
`;
};
const port = 3000;
server.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
