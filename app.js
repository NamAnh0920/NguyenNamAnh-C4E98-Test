let container = document.getElementById('container');

function welcome() {
    container.innerHTML = '';
    let div = document.createElement('div');
    div.classList = 'welcome';
    let welDiv = document.createElement('div');
    welDiv.classList = 'welcomeDiv';
    let input = document.createElement('input');
    input.required;
    input.id = 'hovaten';
    welDiv.appendChild(input);
    let password = document.createElement('input');
    password.id = 'password';
    password.type = 'password';
    password.required;
    password.placeholder = 'Enter password';
    div.appendChild(password);
    let label = document.createElement('label');
    label.classList = 'label';
    let span = document.createElement('span');
    span.classList = 'spanName';
    span.innerText = 'Họ và Tên';
    label.appendChild(span);
    welDiv.appendChild(label);
    let loginButton = document.createElement('button');
    loginButton.classList = 'login';
    loginButton.innerText = 'Đăng Nhập';
    let divPage = document.createElement('div');
    divPage.classList = 'divPage';
    let divTitle = document.createElement('div');
    divTitle.classList = 'divTitle';
    divTitle.innerHTML = `<h1>WELCOME TO THE PHONEBOOK</h1><hr>`;
    divPage.appendChild(divTitle);
    div.appendChild(welDiv);
    div.appendChild(divPage);
    container.appendChild(divPage);
    container.appendChild(div);
    container.appendChild(loginButton);
    let signUpButton = document.createElement('button');
    signUpButton.innerHTML = 'Sign Up';
    signUpButton.classList = 'signUp';
    container.appendChild(signUpButton);
    getSignUpForm(container);
}

function getHead(name) {
    container.innerHTML = '';
    let head = document.createElement('header');
    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Thanh tìm kiếm'); // create search bar
    input.id = 'searchBar';
    let searchButton = document.createElement('button'); // create search button
    searchButton.innerHTML = '<i class="material-icons search">youtube_searched_for</i>'

    let createButton = document.createElement('button'); // create create button
    createButton.innerHTML = `<i class ='material-icons create'>person_add</i><span>Tạo danh bạ</span>`;
    createButton.classList = 'create';
    
    let divWel = document.createElement('div');
    divWel.classList = 'title';
    divWel.innerText = `Welcome, ${name}`;

    head.appendChild(divWel);
    head.appendChild(input);
    head.appendChild(searchButton);
    head.appendChild(createButton);
    container.appendChild(head);
}

async function getData() {
    let data = await fetch('https://sheetdb.io/api/v1/fassxylsw7rn7');
    dataDetail = data.json();
    return dataDetail;
}


arr = ['Name', 'Age', 'Gender', 'Phone', 'Address', 'Group'];
Group = ['Chọn', 'All', 'Bạn bè', 'Đồng nghiệp', 'Gia đình'];
const info = [{
    Name: '',
    Age: '',
    Gender: '',
    Phone: '',
    Address: '',
    Group: '',
    Img: '',
    API: '',
    pass: '',
}];

// create new info
async function createButton(human, x) {
    let backGround = document.createElement('div');
    backGround.classList = 'backGround';
    let trImg = document.createElement('td');
    trImg.setAttribute('colspan', 2);
    await addPhoto(trImg, cnt);
    container.innerHTML = '';
    id = 0;
    let submit = document.createElement('button');
    submit.classList = 'submitUpdate';
    submit.id = x;
    if (human == undefined) {
        human = Object.create(info);
        submit.classList = 'submit';
    }
    let table = document.createElement('table');
    table.classList = 'createButton';
    table.appendChild(trImg);
    for (let character of arr) {
        let a = document.createElement('tr');
        if (character == 'Gender') {
            let th = document.createElement('th');
            th.classList = 'GenderCreate';
            th.innerText = `${character}`;
            let tdSelect = document.createElement('td');
            sortGender(tdSelect, id, 'Nam', 'Nữ');
            a.appendChild(th);
            a.appendChild(tdSelect);
            table.appendChild(a);
            id++;
        } else if (character == 'Group') {
            let groupTh = document.createElement('th');
            groupTh.classList = 'GroupCreate';
            groupTh.innerHTML = `${character}`;
            let group = document.createElement('td');
            let select = document.createElement('select');
            select.id = id;
            select.classList = '';
            for (let one of Group) {
                if (one != 'All') {
                    select.innerHTML += `<option value='${one}'>${one}</option>`;
                }
            }
            group.appendChild(select);
            a.appendChild(groupTh);
            a.appendChild(group);
            table.appendChild(a);
            id++;
        } else {
            let th = document.createElement('th');
            th.classList = `${character}Create`;
            th.innerText = `${character}`;
            let tdSelect = document.createElement('td');
            let input = document.createElement('input');
            input.required;
            input.id = id;
            input.setAttribute('placeholder', `Insert ${character}`);
            input.defaultValue = human[0][character];
            let div = document.createElement('div');
            div.classList = `hover${character}`;
            div.innerHTML = `<i class="material-icons ${character}">error_outline</i>`;
            if (character == 'Name') {
                input.type = 'text';
                requireName(div);
            } else if (character == 'Age') {
                input.type = 'number';
                requireAge(div);
            } else if (character == 'Phone') {
                input.type = 'number';
                requirePhone(div);
            } else {
                requireAddress(div);
            }
            tdSelect.appendChild(input);
            tdSelect.appendChild(div);
            a.appendChild(th);
            a.appendChild(tdSelect);
            table.appendChild(a);
            id++;
        }
    }
    let a = document.createElement('tr');
    let thImg = document.createElement('th');
    thImg.innerHTML = 'Select Image';
    a.appendChild(thImg);
    let divPic = document.createElement('td');
    let divPicture = document.createElement('div');
    divPicture.classList = `hoverPic`;
    let inputPic = document.createElement('input');
    inputPic.id = 'updateImg';
    inputPic.type = 'file';
    inputPic.accept = 'image/*';
    divPicture.innerHTML = `<i class="material-icons Picture">error_outline</i>`;
    requirePic(divPicture);
    divPic.appendChild(inputPic);
    divPic.appendChild(divPicture);
    a.appendChild(divPic);
    table.appendChild(a);
    table.appendChild(submit);
    submit.innerText = 'Submit';
    backGround.appendChild(table);
    container.appendChild(backGround);
}

let userArr = [{
    Name: 'Nam Anh',
    pass: 'Namanh@0920',
    API: '',
}];

let imgArr = ['https://randomwordgenerator.com/img/picture-generator/5ee2d1404d51b10ff3d8992cc12c30771037dbf85254784a702879d3924e_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/51e6dc41434faa0df7c5d57bc32f3e7b1d3ac3e455517349762f72d794_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/53e9d3464f4faa0df7c5d57bc32f3e7b1d3ac3e45551704a762d78d591_640.jpg',
'https://randomwordgenerator.com/img/picture-generator/52e8d2424c56a514f1dc8460962e33791c3ad6e04e5074417c2d78d39e45cc_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/idea-3085367_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/woman-1283009_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/woman-1283009_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e0d5454b52ac14f1dc8460962e33791c3ad6e04e5074417d2e72d19f48c4_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e0d2444953ad14f1dc8460962e33791c3ad6e04e5074417c297edd9f44c2_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/52e4d0434a55ae14f1dc8460962e33791c3ad6e04e507440762879dd964ccc_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/52e3d7434b51aa14f1dc8460962e33791c3ad6e04e5074417c2f7cd3944dc4_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/54e1d4434e55b10ff3d8992cc12c30771037dbf852547849752678d79648_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e3d5414e51a514f1dc8460962e33791c3ad6e04e5074417c2f7dd49f4ec2_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/53e0d7454b56ab14f1dc8460962e33791c3ad6e04e50744172297cdd9745c6_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e7d74b4a52ae14f1dc8460962e33791c3ad6e04e5074417d2f7dd5964bcd_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e7d7424a54ac14f1dc8460962e33791c3ad6e04e50744172297cdc914ac2_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/5fe4d7474b56b10ff3d8992cc12c30771037dbf85254794e7d2a78dc904c_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e8d64b4b56a514f1dc8460962e33791c3ad6e04e507441722a72dc9448c3_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/55e1d5454c5aa414f1dc8460962e33791c3ad6e04e5074417d2c7ed19349c2_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/54e4dc474f53a414f1dc8460962e33791c3ad6e04e5074417d2e7ed7954ac5_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/55e2d2454b54a414f1dc8460962e33791c3ad6e04e50744172277fd09345c7_640.jpg', 
'https://randomwordgenerator.com/img/picture-generator/57e4dd404d51a914f1dc8460962e33791c3ad6e04e5074417c2e7dd29744c7_640.jpg']
async function phoneCollection() {
    let dataDetail = await getData();
    let arr = [];
    let id = 0;
    let one = Object.create(info);
    for (person in dataDetail) {
        one.Phone = person['Phone'];
        one.Img = imgArr[id];
        arr.push(one);
        id++;
    }
    return arr;
}

async function addPhoto(table, cnt) {
    arrInfo = await phoneCollection();
    let img = document.createElement('img');
    img.classList = 'imgInfo';
    img.setAttribute('width', '300px');
    img.setAttribute('height', '320px');
    if (cnt == undefined) {
        img.alt = 'https://image.freepik.com/free-icon/important-person_318-10744.jpg';
    } else {
        let infoPerson = arrInfo.find(element => element['Phone'] = cnt);
        img.src = infoPerson['Img'];
        img.alt = 'https://image.freepik.com/free-icon/important-person_318-10744.jpg';
    }
    table.appendChild(img);
}

async function updatePhoto(table, cnt) {
}

function requirePic(table) {
    let divPic = document.createElement('div');
    divPic.classList = 'requirePic';
    divPic.innerHTML = `Lưu ý: Vui lòng kiểm tra lại link ảnh trước khi lưu. Ứng dụng chỉ nhận đường dẫn.`;
    table.appendChild(divPic);
}
function requireName(table) {
    let divName = document.createElement('div');
    divName.classList = 'requireName';
    divName.innerText = `Yêu cầu: Họ và tên người dùng không quá 50 ký tự.\nVD: Nguyễn Thành Long, Hoàng Thị Minh Thu, ...`;
    table.appendChild(divName);
}

function requireAge(table) {
    let divAge = document.createElement('div');
    divAge.classList = 'requireAge';
    divAge.innerText = 'Yêu cầu: Tuổi không quá 90.';
    table.appendChild(divAge);
}

function requirePhone(table) {
    let divPhone = document.createElement('div');
    divPhone.classList = 'requirePhone';
    divPhone.innerText = `Yêu cầu: Nhập số điện thoại theo đầu số trong nước.\nVD: (+84)936167566 => 0936167566`;
    table.appendChild(divPhone);
}

function requireAddress(table) {
    let divAddress = document.createElement('div');
    divAddress.classList = 'requireAddress';
    divAddress.innerText = `Yêu cầu: Nhập địa chỉ nhà không quá 150 ký tự.\nVD: 22 Thành Công`;
    table.appendChild(divAddress);
}

// create table
async function getTable(dataDetail) {
    if (dataDetail == undefined) {
        dataDetail = await getData();
    }
    console.log(dataDetail);
    let divMain = document.createElement('div');
    divMain.setAttribute('class', 'main-body');
    let table = document.createElement('table');
    table.classList = 'table-content';
    let tr = document.createElement('tr');
    for (let one of arr) {
        if (one != 'Group') {
            let th = document.createElement('th');
            th.setAttribute('class', `${one}`)
            if (one == 'Name') {
                th.innerText = `${one}`;
                sortName(th);
            } else if (one == 'Age') {
                th.innerText = `${one}`;
                sortAge(th);
            } else if (one == 'Gender') {
                th.innerText = `${one}`;
                sortGender(th, '', 'Nam', 'Nữ');
            } else {
                th.innerText = `${one}`;
            }
            tr.appendChild(th);
        }
    }
    let th = document.createElement('th');
    th.setAttribute('class', 'function');
    th.setAttribute('colspan', '2');
    th.innerText = 'Chức Năng';
    tr.appendChild(th);
    table.appendChild(tr);
    let group = document.createElement('div');
    group.setAttribute('class', 'group');
    let div = document.createElement('div');
    div.innerHTML = 'GROUP';
    div.classList = 'space';
    divMain.appendChild(div);
    let select = document.createElement('select');
    select.id = 'group';
    for (let one of Group) {
        select.innerHTML += `<option value='${one}'>${one}</option>`;
    }
    div.appendChild(select);
    group.appendChild(div);
    divMain.appendChild(group)
    for (let person of dataDetail) {
        aRow = document.createElement(`tr`);
        aRow.setAttribute('id', person['Phone']);
            for (let character in person) {
                if (character != 'Group') {
                    aRow.innerHTML += `<td class='info${character}'>${person[character]}</td>`;
                }
            }
        if (aRow.innerText != '') {
            aRow.innerHTML += `<td><button><i class="material-icons remove">clear</i></button></td>`;
            aRow.innerHTML += `<td><button><i class="material-icons update">build</i></button></td>`;
            table.appendChild(aRow);
        }
    }
    divMain.appendChild(table);
    container.appendChild(divMain);
}

function sortName(name) {
    let sortName = document.createElement('select');
    sortName.id = 'Name';
    let optChoose = document.createElement('option');
    optChoose.value = '';
    optChoose.innerText = 'Chọn';
    let optAsc = document.createElement('option');
    optAsc.value = 'asc';
    optAsc.innerText = 'Theo alphabet';
    let optDes = document.createElement('option');
    optDes.value = 'desc';
    optDes.innerHTML = 'Ngược alphabet';
    let optAll = document.createElement('option'); 
    optAll.value = 'All';
    optAll.innerText = 'Theo thời gian';
    sortName.appendChild(optChoose);
    sortName.appendChild(optAll);
    sortName.appendChild(optAsc);
    sortName.appendChild(optDes);
    name.appendChild(sortName);
}

function sortGender(name, cnt, opt1, opt2) {
    let sortGender = document.createElement('select');
    sortGender.id = cnt;
    let optChoose = document.createElement('option');
    optChoose.value = '';
    optChoose.innerText = 'Chọn';
    let optNam = document.createElement('option');
    optNam.value = opt1;
    optNam.innerText = 'Nam';
    let optNu = document.createElement('option');
    optNu.value = opt2;
    optNu.innerText = 'Nữ';
    sortGender.appendChild(optChoose);
    sortGender.appendChild(optNu);
    sortGender.appendChild(optNam);
    name.appendChild(sortGender);
}

function sortAge(age) {
    let sortAge = document.createElement('select');
    sortAge.id = 'Age';
    let optChoose = document.createElement('option');
    optChoose.value = '';
    optChoose.innerText = 'Chọn';
    let optAsc = document.createElement('option');
    optAsc.value = 'asc'; 
    optAsc.innerText = 'Tăng dần';
    let optDes = document.createElement('option'); 
    optDes.value = 'desc';
    optDes.innerText = 'Giảm dần';
    sortAge.appendChild(optChoose);
    sortAge.appendChild(optAsc);
    sortAge.appendChild(optDes);
    age.appendChild(sortAge);
}

function getSignUpForm(table) {
    let divSignUp = document.createElement('div');
    divSignUp.id = 'signUpForm';
    divSignUp.classList = 'close';
    let labelName = document.createElement('label');
    labelName.innerHTML = '<b>Name</b>';
    let nameSignUp = document.createElement('input');
    nameSignUp.id = 'nameSignUp';
    nameSignUp.required;
    nameSignUp.placeholder = 'Enter user name';
    let labelPass = document.createElement('label');
    labelPass.innerHTML = '<b>Password</b>';
    let passSignUp = document.createElement('input');
    passSignUp.id = 'passSignUp';
    passSignUp.type = 'password';
    passSignUp.required;
    passSignUp.placeholder = 'Enter password';
    let labelPassRe = document.createElement('label');
    labelPassRe.innerHTML = '<b>Repeat Password</b>';
    let passSignUpRe = document.createElement('input');
    passSignUpRe.id = 'passSignUpRe';
    passSignUpRe.type = 'password';
    passSignUpRe.required;
    passSignUpRe.placeholder = 'Repeat password';
    let labelAPI = document.createElement('label');
    labelAPI.innerHTML = '<b>Put your API here</b>'
    let APIset = document.createElement('input');
    APIset.id = 'apiSet';
    APIset.required;
    APIset.placeholder = `Enter your API`;
    let buttonSignUp = document.createElement('button');
    buttonSignUp.innerHTML = 'Sign Up';
    buttonSignUp.classList = 'signUpNow';
    divSignUp.innerHTML += '<div>Register Here!</div>' + labelName.outerHTML 
    + '<br>' + nameSignUp.outerHTML + '<br>' + labelPass.outerHTML 
    + '<br>' + passSignUp.outerHTML + '<br>' + labelPassRe.outerHTML 
    + '<br>' + passSignUpRe.outerHTML + '<br>' + labelAPI.outerHTML 
    + '<br>' + APIset.outerHTML +  '<br>' + buttonSignUp.outerHTML;
    table.appendChild(divSignUp);
}

var cnt; var hovaten = '';
container.onclick = async function(event) {
    if (event.target.classList.contains('create')) {
        createButton(undefined, 'submit');
    } else if (event.target.classList.contains('submit')) {
        let name = document.getElementById('0');
        let age = document.getElementById('1');
        let gender = document.getElementById('2');
        let phone = document.getElementById('3');
        let address = document.getElementById('4');
        let group = document.getElementById('5');
        let info = [name, age, gender, phone, address, group];
        axios.post('https://sheetdb.io/api/v1/fassxylsw7rn7',{
            "data": {
                "Name": name.value, 
                "Age": age.value,
                "Gender": gender.value,
                "Phone": phone.value,
                "Address": address.value,
                "Group": group.value,
            }
        }).then( response => {
            let upPic = document.getElementById('updateImg');
            imgArr.push(upPic.value);
            getHead(hovaten);
            getTable();
        })
    } else if (event.target.classList.contains('submitUpdate')) {
        console.log(event.target.classList);
        let upPic = document.getElementById('updateImg');
        arrInfo[arrInfo.indexOf(cnt)] = upPic.value;
        let name = document.getElementById('0');
        let age = document.getElementById('1');
        let gender = document.getElementById('2');
        let phone = document.getElementById('3');
        let address = document.getElementById('4');
        let group = document.getElementById('5');
        let info = [name, age, gender, phone, address, group];
        axios.patch(`https://sheetdb.io/api/v1/fassxylsw7rn7/Phone/${event.target.id}`,{
            "data": {
                "Name": name.value, 
                "Age": age.value,
                "Gender": gender.value,
                "Phone": phone.value,
                "Address": address.value,
                "Group": group.value,
            }
        }).then( response => {
            getHead(hovaten);
            getTable();
        }).catch(error => {
            getHead(hovaten);
            getTable();
            console.log(error.response.request._response);
        })
    } else if (event.target.classList.contains('update')) {
        cnt = event.target.parentElement.parentElement.parentElement.id;
        axios.get(`https://sheetdb.io/api/v1/fassxylsw7rn7/search?Phone=${cnt}`)
        .then(response => {
            console.log(response.data);
            createButton(response.data, cnt);
        })
    } else if (event.target.classList.contains('remove')) {
        cnt = event.target.parentElement.parentElement.parentElement.id;
        axios.delete(`https://sheetdb.io/api/v1/fassxylsw7rn7/Phone/${cnt}`)
        .then(response => {
            getHead(hovaten);
            getTable();
        })
    } else if (event.target.value == 'Bạn bè'&& event.target.id == 'group'|| event.target.value == 'Gia đình'&& event.target.id == 'group'|| event.target.value == 'Đồng nghiệp'&& event.target.id == 'group') {
        axios.get(`https://sheetdb.io/api/v1/fassxylsw7rn7/search?Group=${event.target.value}`)
        .then(response => {
            getHead(hovaten);
            getTable(response.data);
        })
    } else if (event.target.value == 'All') {
        getHead(hovaten);
        getTable();
    } else if (event.target.value == ('asc'||'desc')) {
        axios.get(`https://sheetdb.io/api/v1/fassxylsw7rn7?sort_by=${event.target.id}&sort_order=${event.target.value}`)
        .then (response => {
            getHead(hovaten);
            getTable(response.data);
        })
    } else if (event.target.value == 'Nam'&& event.target.id == ''|| event.target.value == 'Nữ'&& event.target.id == '') {
        axios.get(`https://sheetdb.io/api/v1/fassxylsw7rn7/search?Gender=${event.target.value}`)
        .then(response => {
            getHead(hovaten);
            getTable(response.data);
        })
    } else if (event.target.classList.contains('search')) {
        let input = document.getElementById('searchBar');
        axios.get(`https://sheetdb.io/api/v1/fassxylsw7rn7/search_or?Name=${input.value}&Age=${input.value}&Phone=${input.value}&Address=${input.value}`)
        .then(response => {
            if (response.data == []) {
                alert('Please look again')
                getHead(hovaten);
                getTable();
            } else {
                getHead(hovaten);
                getTable(response.data);
            }
        })
    } else if (event.target.classList.contains('login')) {
        let input = document.getElementById('hovaten');
        let password = document.getElementById('password');
        hovaten = input.value;
        let check = userArr.find(element => element['Name'] == hovaten)
        if (check == undefined) {
            alert('Invalid user');
        } else if (check['pass'] != password.value){
            alert('Wrong password');
        } else {
            getHead(hovaten);
            getTable();
        }
    } else if (event.target.classList.contains('signUp')) {
        let signUp = document.getElementById('signUpForm');
        signUp.classList.add('open');
        signUp.classList.remove('close');
    } else if (event.target.classList.contains('signUpNow')) {
        let nameSignUp = document.getElementById('nameSignUp');
        let passSignUp = document.getElementById('passSignUp');
        let passSignUpRe = document.getElementById('passSignUpRe');
        let APIset = document.getElementById('apiSet');
        if (passSignUp.value == passSignUpRe.value) {
            let signUp = document.getElementById('signUpForm');
            signUp.classList.add('close');
            signUp.classList.remove('open');
            var one = Object.create(info);
            one.Name = nameSignUp.value;
            one.pass = passSignUp.value;
            one.API = APIset.value;
            userArr.push(one);
            nameSignUp.value = '';
            passSignUp.value = '';
            APIset.value = '';
        } else {
            alert('Please enter the password again.');
        }
    }
}

// getHead();
// getTable();
// createButton(undefined, 'submit');
welcome();