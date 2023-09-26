import { randomUUID } from 'crypto';

export const createPerson = (req, res) => {
  const body = req.body;

  if (!isApelidoValid(body.apelido)) {
    return res.status(400).send('Apelido inválido');
  }

  if (!isNomeValid(body.nome)) {
    return res.status(400).send('Nome inválido');
  }

  if (!isNascimentoValid(body.nascimento)) {
    return res.status(400).send('Nascimento inválido');
  }

  if (!isStackValid(body.stack)) {
    return res.status(400).send('Stacks inválidas');
  }

  // Salva pessoa no banco e retorna o Id no Header Location: /pessoas/:id
  const id = randomUUID();

  res
    .status(201)
    .append('Location', `/pessoas/${id}`)
    .send('Pessoa criada com sucesso');
}


const isApelidoValid = (apelido) => {
  if (typeof apelido != 'string') {
    return false;
  }

  if (!apelido.length || apelido.length > 32) {
    return false;
  }

  return true;
}

const isNomeValid = (nome) => {
  if (typeof nome != 'string') {
    return false;
  }

  if (!nome.length || nome.length > 100) {
    return false;
  }

  return true;
}

const isNascimentoValid = (nascimento) => {
  if (!nascimento) return false;

  if (typeof nascimento != 'string') return false;

  const regEx = /^\d{4}-\d{2}-\d{2}$/;

  return nascimento.match(regEx) != null;
}

const isStackValid = (stack) => {
  if (!stack) return true;

  if (!Array.isArray(stack)) return false;

  for (const each in stack) {
    if (typeof each != 'string') return false;

    if (!each.length || each.length > 32) return false;
  }

  return true;
}
