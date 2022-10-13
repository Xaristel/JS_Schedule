let citiesList = ["Краснодар", "Москва", "Ростов"];
let shopsList = ["Цех 1", "Цех 2", "Цех 3", "Цех 4", "Цех 5"]
let employeeList = ["Иванов И.И.", "Андреев А.А.",
                    "Пашков П.П.", "Васильченко В.В.",
                    "Тугин Т.Т.", "Тихомиров Т.Т.",
                    "Харитонов Х.Х.", "Мальченко М.М.",
                    "Петров П.П.", "Сабуров С.С.",]
let brigadesList = ["Бригада 1", "Бригада 2"]
let shiftsList = ["Смена 1 (8:00 - 20:00)", "Смена 2 (20:00 - 8:00)"]

/*
var schedulesList = [];

schedulesList[0] = { id: "0", city: "Краснодар", shop: "Цех 1", employee: "Иванов И.И.", brigade: "Бригада 1", shift: "Смена 1 (8:00 - 20:00)"}
schedulesList[1] = { id: "1", city: "Краснодар", shop: "Цех 1", employee: "Андреев А.А.", brigade: "Бригада 2", shift: "Смена 2 (20:00 - 8:00)"}
schedulesList[2] = { id: "2", city: "Краснодар", shop: "Цех 2", employee: "Пашков П.П.", brigade: "Бригада 1", shift: "Смена 1 (8:00 - 20:00)"}
schedulesList[3] = { id: "3", city: "Краснодар", shop: "Цех 2", employee: "Васильченко В.В.", brigade: "Бригада 2", shift: "Смена 2 (20:00 - 8:00)"}
schedulesList[4] = { id: "4", city: "Москва", shop: "Цех 3", employee: "Тугин Т.Т.", brigade: "Бригада 1", shift: "Смена 1 (8:00 - 20:00)"}
schedulesList[5] = { id: "5", city: "Москва", shop: "Цех 3", employee: "Тихомиров Т.Т.", brigade: "Бригада 2", shift: "Смена 2 (20:00 - 8:00)"}
schedulesList[6] = { id: "6", city: "Москва", shop: "Цех 4", employee: "Харитонов Х.Х.", brigade: "Бригада 1", shift: "Смена 1 (8:00 - 20:00)"}
schedulesList[7] = { id: "7", city: "Москва", shop: "Цех 4", employee: "Мальченко М.М.", brigade: "Бригада 2", shift: "Смена 2 (20:00 - 8:00)"}
schedulesList[8] = { id: "8", city: "Ростов", shop: "Цех 5", employee: "Петров П.П.", brigade: "Бригада 1", shift: "Смена 1 (8:00 - 20:00)"}
schedulesList[9] = { id: "9", city: "Ростов", shop: "Цех 5", employee: "Сабуров С.С.", brigade: "Бригада 2", shift: "Смена 2 (20:00 - 8:00)"}
*/

var comboBox_City = document.getElementById('city');
var comboBox_Shop = document.getElementById('shop');
var comboBox_Employee = document.getElementById('employee');
var textBox_Brigade = document.getElementById('brigade');
var textBox_Shift = document.getElementById('shift');

FillCities();
FillShops(0, 5);
FillEmployees(0, 10);

comboBox_City.selectedIndex = -1;
comboBox_Shop.selectedIndex = -1;
comboBox_Employee.selectedIndex = -1;
FillEmployeeInfo(-1);

function FillCities()
{
  for (let i = 0; i < citiesList.length; i++)
  {
    comboBox_City.options[comboBox_City.length] = new Option(citiesList[i]);
  }
}

function UpdateShopsData()
{
  comboBox_Shop.innerHTML = "";

  switch (comboBox_City.options[comboBox_City.selectedIndex].text)
  {
    case citiesList[0]:
      FillShops(0, 2);
      break;
    case citiesList[1]:
      FillShops(2, 4);
      break;
    case citiesList[2]:
      FillShops(4, 5);
      break;
    default:
      FillShops(shopsList.length);
      break;
  }
}

function FillShops(from, to)
{
  for (let i = from; i < to; i++)
  {
    comboBox_Shop.options[comboBox_Shop.length] = new Option(shopsList[i]);
  }
    comboBox_Shop.selectedIndex = -1;
    comboBox_Employee.selectedIndex = -1;
    FillEmployeeInfo(-1);
}

function UpdateEmployeeData()
{
  comboBox_Employee.innerHTML = "";

  switch (comboBox_Shop.options[comboBox_Shop.selectedIndex].text)
  {
    case shopsList[0]:
      FillEmployees(0, 2);
      break;
    case shopsList[1]:
      FillEmployees(2, 4);
      break;
    case shopsList[2]:
      FillEmployees(4, 6);
      break;
    case shopsList[3]:
      FillEmployees(6, 8);
      break;
    case shopsList[4]:
      FillEmployees(8, 10);
      break;
    default:
      FillEmployees(employeeList.length);
      break;
  }
}

function FillEmployees(from, to)
{
  for (let i = from; i < to; i++)
  {
    comboBox_Employee.options[comboBox_Employee.length] = new Option(employeeList[i]);
  }
  comboBox_Employee.selectedIndex = -1;
  FillEmployeeInfo(-1);
}

function SelectedEmployee()
{
  switch (comboBox_Employee.options[comboBox_Employee.selectedIndex].text)
  {
    case employeeList[0]:
      FillEmployeeInfo(0);
      break;
    case employeeList[1]:
      FillEmployeeInfo(1);
      break;
    case employeeList[2]:
      FillEmployeeInfo(0);
      break;
    case employeeList[3]:
      FillEmployeeInfo(1);
      break;
    case employeeList[4]:
      FillEmployeeInfo(0);
      break;
    case employeeList[5]:
      FillEmployeeInfo(1);
      break;
    case employeeList[6]:
      FillEmployeeInfo(0);
      break;
    case employeeList[7]:
      FillEmployeeInfo(1);
      break;
    case employeeList[8]:
      FillEmployeeInfo(0);
      break;
    case employeeList[9]:
      FillEmployeeInfo(1);
      break;
    default:
      FillEmployeeInfo(-1);
      break;
  }
}

function FillEmployeeInfo(num)
{
  if (num != -1)
  {
    textBox_Shift.value = shiftsList[num];
    textBox_Brigade.value = brigadesList[num];
  }
  else {
    textBox_Shift.value = "Выберите сотрудника...";
    textBox_Brigade.value = "Выберите сотрудника...";
  }
}

function SaveToJSON()
{
  var obj = {city: comboBox_City.options[comboBox_City.selectedIndex].text,
            shop: comboBox_Shop.options[comboBox_Shop.selectedIndex].text,
            employee: comboBox_Employee.options[comboBox_Employee.selectedIndex].text,
            brigade: textBox_Brigade.value,
            shift: textBox_Shift.value};

  var a = document.createElement("a");
  var file = new Blob([JSON.stringify(obj)], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = "schedule.json";
  a.click();
}
