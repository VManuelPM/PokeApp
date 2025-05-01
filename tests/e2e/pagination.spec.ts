import {expect, test} from '@playwright/test';

test('navegar a la siguiente página de resultados', async ({page}) => {
  await page.goto('http://localhost:4200');
  const nextPageButton = page.locator('button[aria-label="Next page"]');
  await nextPageButton.click();
  await expect(page.locator('mat-paginator')).toContainText(/6\s*[-–]\s*10/, {timeout: 10000});
});
