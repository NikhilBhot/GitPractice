const{test,expect}=require('@playwright/test')

test('Test1',async({page})=>{
    await page.goto('https://www.google.com/Employee1');
    await expect(page).toHaveTitle('Google');
})