// exports.xD = (req, res) => {
//     const message = 'Que mas, perame tomate';
//     res.status(200).send(message);
// };
// Object.defineProperty(exports, "__esModule", { value: true });

// Object.defineProperty(exports, "__esModule", { value: true });
// exports.myData = void 0;

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.myData = async (req, res) => {
  const username = req.query.username || "EverUnLOver";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const responseObject = await response.json();
    const avatarUrl = responseObject.avatar_url;
    res.redirect(avatarUrl);
  } catch (e) {
    res.status(501).send(e.message);
  }
};

exports.myDta = async (req, res) => {
  res.send("Hola");
};