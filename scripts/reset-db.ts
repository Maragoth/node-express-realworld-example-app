// scripts/reset-db.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetDatabase() {
  console.log('🔄 Clearing database...');


  await prisma.comment.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.article.deleteMany();

  console.log('✅ Database cleaned.');
}

resetDatabase()
  .catch((err) => {
    console.error('❌ Error clearing database:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
