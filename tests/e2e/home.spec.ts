import {test, expect} from '@playwright/test';

test('La página principal se carga correctamente', async ({page}) => {
  await page.goto('http://localhost:4200');
  await expect(page).toHaveTitle(/PokeApp/i);
});
