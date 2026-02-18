const{test,expect}=require('@playwright/test')

test('Demo1Test11',async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

