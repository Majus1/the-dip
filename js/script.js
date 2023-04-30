let reps = [];


$(".start-button").click(function () {
    localStorage.setItem('current-workout-date', $("#workout-date").val());
    localStorage.setItem('current-workout-time', $("#workout-time").val());
});


$("#save-reps-button").click(function () {
    let exerciseReps = $("#exercise-reps").val();
    let exerciseWeight = $("#exercise-weight").val();
    if (reps.length === 0) {
        $(".current-stats").append('<p className="previous-weight"><span>' + exerciseWeight + '</span>kg</p>');
    } else if (reps.length > 9) {
        window.alert("Dude chill!");
    }
    $(".current-stats").append('<p class="previous-rep rep-01">' + exerciseReps + '</p>');
    reps.push(parseInt(exerciseReps));
});


$("#finish-button").click(function () {
    let workoutDate = localStorage.getItem('current-workout-date');
    let workoutTime = localStorage.getItem('current-workout-time');
    let exerciseWeight = $("#exercise-weight").val();
    localStorage.setItem($(".display-3").text(), JSON.stringify({
        date: workoutDate,
        time: workoutTime,
        weight: exerciseWeight,
        repetitions: reps
    }));
});


$(window).on("load", function () {
    if (window.location.pathname === "/the-dip/the-workout.html") {
        let previousWorkoutStr = localStorage.getItem($(".display-3").text());
        if (previousWorkoutStr !== null) {
            let previousWorkout = JSON.parse(previousWorkoutStr);
            $(".previous-stats").append('<p class="previous-weight"><span>' + previousWorkout.weight + '</span>kg</p>');
            previousWorkout.repetitions.forEach(function (number) {
                $(".previous-stats").append('<p class="previous-rep rep-01">' + number + '</p>');
            });
        }
    }
});


// ::::: Variables :::::

// Workout type
let workoutType = document.title;
let activeWorkout= {
    workout_type: "_",
    exercises: {}
};

// ::::: Variables :::::


// ::::: Exercise type :::::
if (workoutType==="01_push-workout") {

    // Nested object that hold all exercises data.
    let addedExercises = {
        squat: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
        hack_squat: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
        lateral_raises: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
        incline_bench_press: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
        tricep_rope_extension: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
        skull_crusher: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
        peck_deck_fly: {
            counter: 0,
            weight: "_",
            reps: "_"
        },
    };

    // Ads contents of addedExercises to exercises property of activeWorkout object
    Object.assign(activeWorkout.exercises, addedExercises);

    // Ads workout type under the workout_type property 
    activeWorkout.workout_type = "01_push-workout";

} else if (workoutType==="02_pull-workout") {
    console.log(`This is a ${workoutType} exercise`);
} else if (workoutType==="03_leg-workout") {
    console.log(`This is a ${workoutType} exercise`);
} else if (workoutType==="04_pull-workout") {
    console.log(`This is a ${workoutType} exercise`);
}
// ::::: Exercise type :::::