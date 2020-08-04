package org.example;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage{
    BrowserSetup browserSetup = new BrowserSetup();
    LoadProp loadProp = new LoadProp();
    static String timestamp = new SimpleDateFormat("dd.MM.yy.HH.mm.ss").format(new Date());


    @Before

    public void openBrowser() {
        browserSetup.setUPBrowser();
        driver.get(loadProp.getProperty("url"));
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://opensource-demo.orangehrmlive.com");
    }

    @After


    public void closeBrowser() {

        //driver.close();{
    }
}

