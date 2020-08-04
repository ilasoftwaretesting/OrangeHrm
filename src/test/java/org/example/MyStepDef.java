package org.example;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MyStepDef extends BasePage {

    LoginPage loginpage = new LoginPage();


        @When("^I enter username <username>$")
        public void i_enter_username_username() {
            loginpage.username();

        }

        @When("^I enter password admin(\\d+)$")
        public void i_enter_password_admin(int arg1) {
            loginpage.username();

        }

        @When("^I click on login button$")
        public void i_click_on_login_button() {
            loginpage.username();

        }

        @Then("^I am not able to log in successfully$")
        public void i_am_not_able_to_log_in_successfully() {
            loginpage.username();
            String loginpage = driver.findElement(By.id("spanMessage")).getText();
            Assert.assertEquals(loginpage, "Invalid credentials");
            System.out.println("i cant login in successfully");

        }

        @When("^I enter password $")
        public void i_enter_password() {

        }

        @When("^I enter password Admin(\\d+)$")
        public void i_enter_password_Admin(int arg1) {

        }

    }




