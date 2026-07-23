# Module 08 - *Fundamental Concepts of Conditionals (Conditionals, logical operators, and decision-making logic)*

## Task 15 -  Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login"
<img width="812" height="315" alt="image" src="https://github.com/user-attachments/assets/aabe812f-a440-4d32-a7eb-30fe57a76ae7" />

## Task 20 - A triangle is valid only if the sum of any two sides is greater than the third side.
<img width="812" height="587" alt="image" src="https://github.com/user-attachments/assets/4fc0a068-e2cc-410e-b49b-883d8f42d6a4" />

<img width="812" height="587" alt="image" src="https://github.com/user-attachments/assets/dfb2381a-b025-4616-ac5c-8e0622ef451a" />

<img width="812" height="737" alt="image" src="https://github.com/user-attachments/assets/efdbd2c6-a731-4947-9f6d-b8e3caf89fb2" />

## Task 21 - Write a JavaScript conditional statement to sort three numbers.
<img width="812" height="790" alt="image" src="https://github.com/user-attachments/assets/ce44a0bb-cbfe-423e-acbb-f308a5fd7896" />

## Task 24 - Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount
<img width="812" height="422" alt="image" src="https://github.com/user-attachments/assets/d3138637-29be-4f3a-8c70-863249e0a890" />

<img width="812" height="297" alt="image" src="https://github.com/user-attachments/assets/0ac187a3-c11b-4779-993b-3eff17af0576" />

## Task 25 -  Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role
<img width="812" height="717" alt="image" src="https://github.com/user-attachments/assets/d2433653-2f03-4284-a411-107aa61ec9e2" />

## Task 26 - ATM Withdrawal. Withdrawal must be a multiple of 100. Balance must be enough. Must keep at least 500 after withdrawal.
                 Start
                   │
                   ▼
   Input Balance & Withdrawal Amount
                   │
                   ▼
 Is amount a multiple of 100?
                   │
          ┌────────┴────────┐
          │                 │
         No                Yes
          │                 │
          ▼                 ▼
 Print Error       Is amount > balance?
                            │
                   ┌────────┴────────┐
                   │                 │
                  Yes               No
                   │                 │
                   ▼                 ▼
          Insufficient      Remaining Balance
              Balance         ≥ 500?
                                   │
                           ┌───────┴────────┐
                           │                │
                          No               Yes
                           │                │
                           ▼                ▼
                Minimum Balance     Withdrawal
                 Must Remain        Successful
                           │                │
                           └────────┬───────┘
                                    ▼
                                   End
