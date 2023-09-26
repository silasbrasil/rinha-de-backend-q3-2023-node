
export const getPersonById = (req, res) => {
  const id = req.params.id;

  res.send(`Person id = ${id}`)
}