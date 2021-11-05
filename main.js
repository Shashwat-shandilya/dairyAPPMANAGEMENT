function proceed(){
    window.location = "dairyInfo.html";
}
function submit(){
    name = document.getElementById("name").value
    cows = document.getElementById("cows").value
    workers = document.getElementById("workers").value
    food = document.getElementById("food").value
    localStorage.setItem("name", name);
    localStorage.setItem("cows", cows);
    localStorage.setItem("workers", workers);
    localStorage.setItem("food", food);
    MoneyFood = cows * food;
    
    window.location = "dairyProfits.html"
}

function weekly(){
    Name = localStorage.getItem("name")
    Cows = localStorage.getItem("cows")
    Workers = localStorage.getItem("workers")
    food = localStorage.getItem("food")

    cow_milk = document.getElementById("cow_milk").value
    Salary_worker = document.getElementById("Salary_worker").value
    Money_food = document.getElementById("Money_food").value
    Money_medication = document.getElementById("Money_medication").value
    Milk_price = document.getElementById("Milk_price").value
    localStorage.setItem("cow_milk", cow_milk);
    localStorage.setItem("Salary_worker", Salary_worker);
    localStorage.setItem("Money_food", Money_food);
    localStorage.setItem("Money_medication", Money_medication);
    localStorage.setItem("Milk_price", Milk_price);
    
    Salary_workerupdated = Salary_worker / 7;

    MoneyEarned = Cows * cow_milk * Milk_price * 7;
    MoneySpent = Workers * Salary_workerupdated + Cows * Money_food + Money_medication;
    MoneyLeft = MoneyEarned - MoneySpent;

    document.getElementById("output").innerHTML = MoneyLeft;

    console.log(MoneyLeft)

}

function monthly(){
    Name = localStorage.getItem("name")
    Cows = localStorage.getItem("cows")
    Workers = localStorage.getItem("workers")
    food = localStorage.getItem("food")

    cow_milk = document.getElementById("cow_milkMonth").value
    Salary_worker = document.getElementById("Salary_workerMonth").value
    Money_food = document.getElementById("Money_foodMonth").value
    Money_medication = document.getElementById("Money_medicationMonth").value
    Milk_price = document.getElementById("Milk_priceMonth").value
    
    localStorage.setItem("cow_milk", cow_milk);
    localStorage.setItem("Salary_worker", Salary_worker);
    localStorage.setItem("Money_food", Money_food);
    localStorage.setItem("Money_medication", Money_medication);
    localStorage.setItem("Milk_price", Milk_price);

    MoneyEarned = Cows * cow_milk * Milk_price * 30;
    MoneySpent = Workers * Salary_worker + Cows * Money_food + Money_medication;
    MoneyLeft = MoneyEarned - MoneySpent;

    document.getElementById("outputMonthly").innerHTML = MoneyLeft;

    console.log(MoneyLeft)

}

function back(){
    window.location = "dairyInfo.html"
}
