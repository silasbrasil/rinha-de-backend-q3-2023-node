
export const searchPerson = (req, res) => {
  const term = req.query.t;

  res.send(`O term é: ${term}`);
}