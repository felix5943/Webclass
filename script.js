function calculateBMI() {
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let gender=document.getElementById("gender").value;
    let height=document.getElementById("height").value/100;
    let weight=document.getElementById("weight").value;
      
    if(height > 0 && weight > 0){
        let bmi=(weight/ (height * height)).toFixed(2);
        let status = "";
        if(bmi < 18.5) status ="Underweight";
        else if(bmi >= 18.5 && bmi < 24.9) status="Normal weight";
        else if(bmi >= 25 && bmi <29.9) status="Overweight";
        else status = "obese";
        
        let resultDiv = document.getElementById("result");
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
        <p><strong>${name}</strong>,Age: ${age},Gender: ${gender}</p>
        <p>Status: <strong>${status}</strong></p>
        `;
    }else{
        alert("Please enter valid height and weight.");
    }
}