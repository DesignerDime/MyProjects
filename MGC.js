const form = document.getElementById('form');
	
	form.addEventListener('submit', function(event){ // Do everything within function so output in viewed when user hits submit
		event.preventDefault();
		
		let weight = parseInt(document.getElementById('weight').value); // Get weight input from HTML
		let height = parseInt(document.getElementById('height').value);
		let age = parseInt(document.getElementById('age').value);
		
		const active = document.querySelectorAll('input[name="active"]'); //Select all  name and store in active
		
		let tdee;
		let cmm;
		
		let totalCals;
		let carbs;
		let protein;
		let fat;
		
		// SEX IF ELSE STATEMENT STARTS HERE 
		if(document.getElementById('female').checked){		
			let bmr = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
			bmr = Math.floor(bmr);
			
			// Choose radio input by id for Activity level and calculate
			for (const activity of active){
				if(activity.checked){
					tdee = activity.value * bmr;
					tdee = Math.floor(tdee / 10) * 10;
					break;
				}
			}
			cmm = tdee * .15;
			cmm = Math.ceil(cmm/10) * 10;
			totalCals = cmm + tdee;
			
			// Choose radio input by id for bodytype and calculate
			if(document.getElementById('endo').checked){
				carbs = cmm * .25;
				protein = cmm * .4;
				fat = cmm * .35;
			}else if(document.getElementById('ecto').checked){
				carbs = cmm * .4;
				protein = cmm * .3;
				fat = cmm * .3;
			}else if(document.getElementById('meso').checked){
				carbs = cmm * .4;
				protein = cmm * .35;
				fat = cmm * .25;
			}
			//Convert to nearest whole number
			carbs = Math.floor(carbs);
			protein = Math.floor(protein);
			fat = Math.floor(fat);
			
			console.log(`Standard calories to eat is ${bmr} per day.`);
			console.log(`Your TDEE is ${tdee}`);
			console.log('Additional calories needed for Muscle gain: ' + (cmm));
			console.log('Total calorie intake for building muscles: ' + (totalCals));
			console.log('Carbs: ' + carbs + ', Protein: ' + protein + ', Fat: ' + fat);
			console.log('\nThank you!');
			
			document.getElementById("totalBmr").innerHTML = bmr;
			document.getElementById("totalCal").innerHTML = totalCals;
			document.getElementById("totalCarb").innerHTML = carbs;
			document.getElementById("totalPro").innerHTML = protein;
			document.getElementById("totalFat").innerHTML = fat;
		}else if(document.getElementById('male').checked){
			let bmr =  66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
			bmr = Math.floor(bmr); //TOTAL BMR
			
			// Choose radio input by id for Activity level and calculate
			for (const activity of active){
				if(activity.checked){
					tdee = activity.value * bmr; //TOTAL TDEE
					tdee = Math.floor(tdee / 10) * 10;
					break;
				}
			}
			cmm = tdee * .15; //TOTAL CMM
			cmm = Math.ceil(cmm/10) * 10;
			totalCals = cmm + tdee;
			
			// Choose radio input by id for bodytype and calculate
			if(document.getElementById('endo').checked){
				carbs = cmm * .25;
				protein = cmm * .4;
				fat = cmm * .35;
			}else if(document.getElementById('ecto').checked){
				carbs = cmm * .4;
				protein = cmm * .3;
				fat = cmm * .3;
			}else if(document.getElementById('meso').checked){
				carbs = cmm * .4;
				protein = cmm * .35;
				fat = cmm * .25;
			}
		
		//Convert to nearest whole number
			carbs = Math.floor(carbs);
			protein = Math.floor(protein);
			fat = Math.floor(fat);
			
			console.log(`Standard calories to eat is ${bmr} per day.`);
			console.log(`Your TDEE is ${tdee}`);
			console.log('Additional calories needed for Muscle gain: ' + (cmm));
			console.log('Total calorie intake for building muscles: ' + (totalCals));
			console.log('Carbs: ' + carbs + ', Protein: ' + protein + ', Fat: ' + fat);
			console.log('\nThank you!');
			
			document.getElementById("totalBmr").innerHTML = bmr;
			document.getElementById("totalCal").innerHTML = totalCals;
			document.getElementById("totalCarb").innerHTML = carbs;
			document.getElementById("totalPro").innerHTML = protein;
			document.getElementById("totalFat").innerHTML = fat;
		}
		
	});
/*BODY INFO POP UP*/
	function popUp(){
		var popup = document.getElementById("myPopup");
		popup.classList.toggle("show");
	}


// https://int.ironbullstrength.com/blogs/learn/how-to-calculate-your-calories-for-muscle-building-in-6-easy-steps
// To calculate your BMR, take the information that we collected from above, and place it into the formula below.

/*
Female = 655.1 + (4.35 × weight in pounds) + (4.7 × height in inches) - (4.7 × age in years)
Male = 66 + (6.2 × weight in pounds) + (12.7 × height in inches) – (6.76 × age in years)
*/
/*
Carbohydrates: One gram contains four calories
Protein: One gram contains four calories
Fat: One gram contains nine calories
*/
