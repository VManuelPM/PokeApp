import {expect, test} from '@playwright/test';

test('Buscar un Pokémon por nombre', async ({page}) => {
  await page.goto('http://localhost:4200');
  const searchInput = page.locator('input[placeholder="Buscar"]');
  await searchInput.fill('pikachu');
  await searchInput.press('Enter');
  await expect(page.locator('td.cdk-column-name')).toContainText(/pikachu/i);
});


test('Ver detalles de un Pokémon', async ({page}) => {
  await page.goto('http://localhost:4200');
  const searchInput = page.locator('input[placeholder="Buscar"]');
  await searchInput.fill('bulbasaur');
  await searchInput.press('Enter');
  const columnName = page.locator('td.cdk-column-name').first();
  await columnName.click();
  await expect(page.locator('mat-card-title')).toContainText('bulbasaur');
});
