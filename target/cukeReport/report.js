$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/Resources/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "I would like to login",
  "description": "so as user i want login",
  "id": "i-would-like-to-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;",
  "rows": [
    {
      "cells": [
        "Username",
        "password",
        "massage"
      ],
      "line": 14,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Invalid credentials"
      ],
      "line": 15,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;2"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 16,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;3"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 17,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;4"
    },
    {
      "comments": [
        {
          "line": 18,
          "value": "#|admin           |         admin123       |  W                          |"
        }
      ],
      "cells": [
        "Admin",
        "Admin123",
        "Csrf token validation failed"
      ],
      "line": 19,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;5"
    },
    {
      "cells": [
        "admin",
        "admin1234",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;6"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 21,
      "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9564234440,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password admin123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_enter_username_username()"
});
formatter.result({
  "duration": 1364159520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 22
    }
  ],
  "location": "MyStepDef.i_enter_password_admin(int)"
});
formatter.result({
  "duration": 1150101789,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 944319268,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 964278850,
  "status": "passed"
});
formatter.after({
  "duration": 21926,
  "status": "passed"
});
formatter.before({
  "duration": 7481875620,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password admin123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_enter_username_username()"
});
formatter.result({
  "duration": 999731298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 22
    }
  ],
  "location": "MyStepDef.i_enter_password_admin(int)"
});
formatter.result({
  "duration": 879881435,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 906180259,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 950657109,
  "status": "passed"
});
formatter.after({
  "duration": 25657,
  "status": "passed"
});
formatter.before({
  "duration": 6797210528,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password ",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_enter_username_username()"
});
formatter.result({
  "duration": 960698012,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_password()"
});
formatter.result({
  "duration": 22392,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 810067679,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 896218194,
  "status": "passed"
});
formatter.after({
  "duration": 16794,
  "status": "passed"
});
formatter.before({
  "duration": 5435712380,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#|admin           |         admin123       |  W                          |"
    }
  ],
  "line": 19,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password Admin123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_enter_username_username()"
});
formatter.result({
  "duration": 1023938344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 22
    }
  ],
  "location": "MyStepDef.i_enter_password_Admin(int)"
});
formatter.result({
  "duration": 94233,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 876144786,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 965051838,
  "status": "passed"
});
formatter.after({
  "duration": 16327,
  "status": "passed"
});
formatter.before({
  "duration": 5414053345,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password admin1234",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_enter_username_username()"
});
formatter.result({
  "duration": 1023968666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 22
    }
  ],
  "location": "MyStepDef.i_enter_password_admin(int)"
});
formatter.result({
  "duration": 866253629,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 966212017,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 947725170,
  "status": "passed"
});
formatter.after({
  "duration": 17261,
  "status": "passed"
});
formatter.before({
  "duration": 6701914788,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 21,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password ",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_enter_username_username()"
});
formatter.result({
  "duration": 1065415612,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_password()"
});
formatter.result({
  "duration": 28457,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 928399558,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 1001824007,
  "status": "passed"
});
formatter.after({
  "duration": 27523,
  "status": "passed"
});
});