function a(){
    document.getElementById('myButton').onclick = function () {
        location.href = "www.yoursite.com";
        var numAgrades10 = parseInt(document.getElementById('numAgrades10').value);
        var numBgrades10 = parseInt(document.getElementById('numBgrades10').value);
        var numCgrades10 = parseInt(document.getElementById('numCgrades10').value);
        var numDgrades10 = parseInt(document.getElementById('numDgrades10').value);
        var numFgrades10 = parseInt(document.getElementById('numFgrades10').value);
        var numAgrades11 = parseInt(document.getElementById('numAgrades11').value);
        var numBgrades11 = parseInt(document.getElementById('numBgrades11').value);
        var numCgrades11 = parseInt(document.getElementById('numCgrades11').value);
        var numDgrades11 = parseInt(document.getElementById('numDgrades11').value);
        var numFgrades11 = parseInt(document.getElementById('numFgrades11').value);
        var uchonorcount = parseInt(document.getElementById('uchonorcount').value);
        var gpa = 4*(numAgrades10 + numAgrades11) + 3*(numBgrades10 + numBgrades11) + 2*(numCgrades10 + numCgrades11) + 1*(numDgrades10 + numDgrades11 + numFgrades10 + numFgrades11);
        var numCourses = numAgrades10 + numAgrades11 + numBgrades10 + numBgrades11 + numCgrades10 + numCgrades11 + numDgrades10 + numDgrades11 + numFgrades10 + numFgrades11;
        if (uchonorcount > 8){
            gpa += 8;
        }
        else{
            gpa += uchonorcount;
        }
        gpa = gpa / (numAgrades10 + numAgrades11 + numBgrades10 + numBgrades11 + numCgrades10 + numCgrades11 + numDgrades10 + numDgrades11 + numFgrades10 + numFgrades11);
        document.write("UC GPA is "+gpa);
    };
}
