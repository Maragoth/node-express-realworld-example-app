const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function resetDatabase() {
  console.log('🔄 Resetting full database (truncate all)...');

  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE
      "Comment",
      "Article",
      "Tag",
      "User"
    RESTART IDENTITY CASCADE
  `);

  console.log('✅ Database fully reset.');
}

resetDatabase()
  .catch((err) => {
    console.error('❌ Error resetting database:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
