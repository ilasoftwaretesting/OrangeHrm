package org.example;

import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserSetup extends BasePage {
    LoadProp loadProp = new LoadProp();
    String browser = loadProp.getProperty("browser");

    public void setUPBrowser() {

        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", "src\\main\\Resources\\Driver\\chromedriver.exe");
            driver = new ChromeDriver();
        }
        else {
            System.out.println("Browser is Wrong");

        }
    }
}
