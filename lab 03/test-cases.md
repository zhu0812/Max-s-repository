# Bug-hunt shop: test cases

 

| Test | Steps | Expected | Actual | Pass? |

|---|---|---|---|---|

| T1 | Read every item name on the product list | All names spelled correctly|The name of the notebook is misspelled |❌

| T2 | Click Add on Notebook | "Notebook ¥12" in the order; Total ¥12 | Notebook is ¥12| ✅|

| T3 | Click Add on Pens (3) | Total goes up by ¥6 | The pen is priced at $6 on the webpage, but $60 in the order|❌ |

| T4 | Compare Printing on the product list with the order | Same price in both places | The price of the paper shown on the webpage is 51, but it is 15 in the order|❌ |

| T5 | Add an item, choose a time, leave name empty, Place order | A message asks for your name |There is no field in the order for the user to enter their name, so a user name may not be available |❌ |

| T6 | Open the Pick-up time list | Only times when the shop is open (8:30 to 17:30) | The store’s hours 8:30–12:00 and 12:45–18:00 are not showing up| ❌|

| T7 | Click the add button |All ADD buttons can be clicked successfully|The ruler button is unclickable | ❌｜

| T8 | Click the“about us” button｜When clicking “About Us”, the store introduction should pop up automatically｜Nothing happens after tapping the button｜❌｜