let question_ara= [
	{
		question: "What is the capital of Bangladesh?",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "When did Bangladesh become indipendent?",
		option_one : "1952",
		option_two : "1947",
		option_three: "1969",
		option_four: "1972",
	},
	{
		question: "What is the national Flower of Bangladesh?",
		option_one : "Red Rose",
		option_two : "White Waterlily",
		option_three: "White Rose",
		option_four: "Red Waterlily",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
	{
		question: "What is the capital of Bangladesh",
		option_one : "Khulna",
		option_two : "Dhaka",
		option_three: "Narayangangh",
		option_four: "Chittagong",
	},
];

let ans_ara=[2,4,2,2,2,2,2,2,2,2,2,2,2,2];
let total_number=0;
let question_user_answered_wrong=[];
let submission_flag = false;



function init_webpage(){
	let question_div_one = document.getElementById('first_div');
	let question_div_two = document.getElementById('second_div');

	let question_length = question_ara.length;
	let half_question = question_length / 2;

	let table_for_question_div_one = document.createElement("table");
	let table_for_question_div_two = document.createElement("table");

	for(let i =0 ;i<half_question; i++){
		let s_question = question_ara[i].question;
		let s_o_one = question_ara[i].option_one;
		let s_o_two = question_ara[i].option_two;
		let s_o_three = question_ara[i].option_three;
		let s_o_four = question_ara[i].option_four;

		let input_id_1 = ""+i+"1";
		let input_id_2 = ""+i+"2";
		let input_id_3 = ""+i+"3";
		let input_id_4 = ""+i+"4";

		let label_id_1 = "l"+i+"1";
		let label_id_2 = "l"+i+"2";
		let label_id_3 = "l"+i+"3";
		let label_id_4 = "l"+i+"4";
		let question_number = "q"+i;


		//question div(table tor one.. colmn span = 2)
		let table_question_row = document.createElement("tr");
		let table_question_col = document.createElement("td");
		table_question_col.colSpan = 2;

		let para_element = document.createElement("p");
		para_element.innerHTML =(i+1) +". " + s_question;

		table_question_col.appendChild(para_element);
		table_question_row.appendChild(table_question_col);
		table_for_question_div_one.appendChild(table_question_row);



		//option one("row 2 column 1")
		let table_option_row_one = document.createElement("tr");
		let table_option_row1_col1 = document.createElement("td");

		let label_1 = document.createElement("label");
		label_1.setAttribute("id",label_id_1);
		label_1.innerHTML = s_o_one;
		let option_1 = document.createElement("input");
		option_1.setAttribute("id",input_id_1);
		option_1.setAttribute("type","checkbox");

		table_option_row1_col1.appendChild(option_1);
		table_option_row1_col1.appendChild(label_1);
		table_option_row_one.appendChild(table_option_row1_col1);



		//option two("row 2 column 2")
		let table_option_row1_col2 = document.createElement("td");

		let label_2 = document.createElement("label");
		label_2.setAttribute("id",label_id_2);
		label_2.innerHTML = s_o_two;
		let option_2 = document.createElement("input");
		option_2.setAttribute("id",input_id_2);
		option_2.setAttribute("type","checkbox");

		table_option_row1_col2.appendChild(option_2);
		table_option_row1_col2.appendChild(label_2);
		table_option_row_one.appendChild(table_option_row1_col2);
		table_for_question_div_one.appendChild(table_option_row_one);





		//row 3 column 1.................
		let table_option_row_two = document.createElement("tr");
		let table_option_row2_col1 = document.createElement("td");

		let label_3 = document.createElement("label");
		label_3.setAttribute("id",label_id_3);
		label_3.innerHTML = s_o_three;
		let option_3 = document.createElement("input");
		option_3.setAttribute("id",input_id_3);
		option_3.setAttribute("type","checkbox");

		table_option_row2_col1.appendChild(option_3);
		table_option_row2_col1.appendChild(label_3);
		table_option_row_two.appendChild(table_option_row2_col1);

		//row 3 column 2..............................
		let table_option_row2_col2 = document.createElement("td");

		let label_4 = document.createElement("label");
		label_4.setAttribute("id",label_id_4);
		label_4.innerHTML = s_o_four;
		let option_4 = document.createElement("input");
		option_4.setAttribute("id",input_id_4);
		option_4.setAttribute("type","checkbox");
		
		table_option_row2_col2.appendChild(option_4);
		table_option_row2_col2.appendChild(label_4);
		table_option_row_two.appendChild(table_option_row2_col2);
		table_for_question_div_one.appendChild(table_option_row_two);


	}
	question_div_one.appendChild(table_for_question_div_one);

	for(let i =half_question ;i<question_length; i++){
		let s_question = question_ara[i].question;
		let s_o_one = question_ara[i].option_one;
		let s_o_two = question_ara[i].option_two;
		let s_o_three = question_ara[i].option_three;
		let s_o_four = question_ara[i].option_four;

		let input_id_1 = ""+i+"1";
		let input_id_2 = ""+i+"2";
		let input_id_3 = ""+i+"3";
		let input_id_4 = ""+i+"4";

		let label_id_1 = "l"+i+"1";
		let label_id_2 = "l"+i+"2";
		let label_id_3 = "l"+i+"3";
		let label_id_4 = "l"+i+"4";
		let question_number = "q"+i;


		//question div(table tor one.. colmn span = 2)
		let table_question_row = document.createElement("tr");
		let table_question_col = document.createElement("td");
		table_question_col.colSpan = 2;

		let para_element = document.createElement("p");
		para_element.innerHTML =(i+1) +". " + s_question;

		table_question_col.appendChild(para_element);
		table_question_row.appendChild(table_question_col);
		table_for_question_div_two.appendChild(table_question_row);



		//option one("row 2 column 1")
		let table_option_row_one = document.createElement("tr");
		let table_option_row1_col1 = document.createElement("td");

		let label_1 = document.createElement("label");
		label_1.setAttribute("id",label_id_1);
		label_1.innerHTML = s_o_one;
		let option_1 = document.createElement("input");
		option_1.setAttribute("id",input_id_1);
		option_1.setAttribute("type","checkbox");

		table_option_row1_col1.appendChild(option_1);
		table_option_row1_col1.appendChild(label_1);
		table_option_row_one.appendChild(table_option_row1_col1);



		//option two("row 2 column 2")
		let table_option_row1_col2 = document.createElement("td");

		let label_2 = document.createElement("label");
		label_2.setAttribute("id",label_id_2);
		label_2.innerHTML = s_o_two;
		let option_2 = document.createElement("input");
		option_2.setAttribute("id",input_id_2);
		option_2.setAttribute("type","checkbox");

		table_option_row1_col2.appendChild(option_2);
		table_option_row1_col2.appendChild(label_2);
		table_option_row_one.appendChild(table_option_row1_col2);
		table_for_question_div_two.appendChild(table_option_row_one);



		//row 3 column 1.................
		let table_option_row_two = document.createElement("tr");
		let table_option_row2_col1 = document.createElement("td");

		let label_3 = document.createElement("label");
		label_3.setAttribute("id",label_id_3);
		label_3.innerHTML = s_o_three;
		let option_3 = document.createElement("input");
		option_3.setAttribute("id",input_id_3);
		option_3.setAttribute("type","checkbox");

		table_option_row2_col1.appendChild(option_3);
		table_option_row2_col1.appendChild(label_3);
		table_option_row_two.appendChild(table_option_row2_col1);

		//row 3 column 2..............................
		let table_option_row2_col2 = document.createElement("td");

		let label_4 = document.createElement("label");
		label_4.setAttribute("id",label_id_4);
		label_4.innerHTML = s_o_four;
		let option_4 = document.createElement("input");
		option_4.setAttribute("id",input_id_4);
		option_4.setAttribute("type","checkbox");
		
		table_option_row2_col2.appendChild(option_4);
		table_option_row2_col2.appendChild(label_4);
		table_option_row_two.appendChild(table_option_row2_col2);
		table_for_question_div_two.appendChild(table_option_row_two);
	}
	question_div_two.appendChild(table_for_question_div_two);
}

function main_function(){
	if(submission_flag==false){
		let result_div = document.getElementsByClassName("result_publishing_div")[0];
		result_div.style.display = "none";
	}
	init_webpage();
}

function submit_function(){
	let question_length = question_ara.length;
	console.log("Ans start from here.");
	for(let i=0;i<question_length;i++){
		let user_ans = 0;
		let choice_1_id = ""+i+"1";
		let choice_2_id = ""+i+"2";
		let choice_3_id = ""+i+"3";
		let choice_4_id = ""+i+"4";

		let choice_1 = document.getElementById(choice_1_id).checked;
		let choice_2 = document.getElementById(choice_2_id).checked;
		let choice_3 = document.getElementById(choice_3_id).checked;
		let choice_4 = document.getElementById(choice_4_id).checked;



		if(choice_1==true && choice_2==false && choice_3==false && choice_4==false){
			if(ans_ara[i]==1){
				total_number++;
			}else {
				question_user_answered_wrong.push(i);
				console.log("Wrong ans.")
			}
		}else if(choice_1==false && choice_2==true && choice_3==false && choice_4==false){
			if(ans_ara[i]==2){
				total_number++;
			}else {
				question_user_answered_wrong.push(i);
				console.log("Wrong ans.")
			}
		}else if(choice_1==false && choice_2==false && choice_3==true && choice_4==false){
			if(ans_ara[i]==3){
				total_number++;
			}else {
				question_user_answered_wrong.push(i);
				console.log("Wrong ans.")
			}
		}else if(choice_1==false && choice_2==false && choice_3==false && choice_4==true){
			if(ans_ara[i]==4){
				total_number++;
			}else {
				question_user_answered_wrong.push(i);
				console.log("Wrong ans.")
			}
		}else {
			question_user_answered_wrong.push(i);
			console.log("Wrong ans.");
		}
	}

	let span_element = document.getElementById("got_mark");
	span_element.innerHTML = total_number+"";
	let total_number_element = document.getElementById("total_mark");
	total_number_element.innerHTML = question_length+"";


	let result_div = document.getElementsByClassName("result_publishing_div")[0];
	result_div.style.display = "block";
}


function check_function(){
	console.log(question_user_answered_wrong);
	let wrong_ans_length=question_user_answered_wrong.length;
	for(let i=0;i<wrong_ans_length;i++){
		let label_number = ans_ara[question_user_answered_wrong[i]];
		let label_id = "l"+question_user_answered_wrong[i]+label_number;
		let label_element = document.getElementById(label_id);
		label_element.style.color = "red";
	}
}

main_function();