
# Three features in my project

-   Limited cradit hours : Credit hours are limited to 20 . you can not select course greater then 20 hours . if you select course greater then cradit hours limitation, you get a alert like 'your cradit hours is finished' .

-  One time select a same card : you can select a course only one time . you can not select multiple time a same course. if you select multiple time a course, you get a alert like 'you allready add thi's add items' .

-  Reasponsive leout : Thi's website is completely responsive . it is designed to adapt and display properly on various devices and screen sizes, such as desktop computers, laptops, tablets, and smartphones.

# Discuss how you managed the state in your assignment project.

In my assignment project, I have used the useState hook to manage the state of the following:

- allcardData : this state use for when The data will be loaded in fetch method, then stored here. and the stored data send to card section .

- chartItems : it is use for when any user select any card for add to chart , then selected card data store here and send to chart component for showing display .

- totalRemainIng :this state Accumulates the number of hours the user is authorized to select courses. and send to chart component stored data for showing in display .

- totalCraditHours :it is use for the total number of hours a user has selected courses, storeing here. then send to chart component for shoing disply .

I have used the addToChart function to add a course to the cart. This function takes the unique ID of the course as an argument and updates the chartItems state accordingly.

I have also used the allreadyAdd, remainingTimeFinish and Total_Credit_Hour functions to display toast messages if I try to add a course that would exceed the remaining credit hours or the total credit hours or select second time.

Overall, I have used the useState hook effectively to manage the state of my application. The code is well-organized and easy to understand.


