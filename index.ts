import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user
    .create({
      data: {
        name: 'Boss',
        age: 24,
        email: 'boss@mail.com',
        role: 'ADMIN'
      }
    })
  console.log(user)
}


main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })