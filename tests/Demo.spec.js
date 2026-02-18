const{test,expect}=require('@playwright/test')

test('Test1',async({page})=>{
    await page.goto('https://www.google.com/Employee2');
    await expect(page).toHaveTitle('Google');
})