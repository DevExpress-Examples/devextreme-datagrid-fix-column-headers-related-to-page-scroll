var s = 55;
var random = function () {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
};

var generateData = function (count) {
    var i;
    var surnames = ["Smith", "Johnson", "Brown", "Taylor", "Anderson", "Harris", "Clark", "Allen", "Scott", "Carter"];
    var names = ["James", "John", "Robert", "Christopher", "George", "Mary", "Nancy", "Sandra", "Michelle", "Betty"];
    var sex = ["Male", "Female"];
    var items = [],
        startBirthDate = Date.parse("1/1/1975"),
        endBirthDate = Date.parse("1/1/1992");

    for (i = 0; i < count; i++) {
        var birthDate = new Date(startBirthDate + Math.floor(
                random() *
                (endBirthDate - startBirthDate)));
        birthDate.setHours(12);

        var nameIndex =
            Math.floor(random() * names.length);
        var item = {
            id: i + 1,
            firstName: names[nameIndex],
            lastName: surnames[Math.floor(random() *
            surnames.length)],
            sex: sex[Math.floor(nameIndex / 5)],
            birthdate: birthDate
        };
        items.push(item);
    }
    return items;
};