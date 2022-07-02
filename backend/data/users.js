import bcrypt from 'bcryptjs'

const users = [
  {
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    email: 'teodora@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'ivan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users