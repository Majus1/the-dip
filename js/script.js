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



// ::::: Exercise type :::::

// ::::: Variables :::::
let workoutType = document.title;
let activeWorkout= {
    workout_type: "_",
    exercises: {},
    counter: 0
};
// ::::: Variables :::::

/*
- Check what type of Exercise is selected based on page tittle
- Once Exercise type is seleced ads the coresponding exercises
*/

if (workoutType==="01_push-workout") {

    // Nested object that hold all exercises data.
    let addedExercises = {
        squat: {
            weight: "_",
            reps: "_"
        },
        hack_squat: {
            weight: "_",
            reps: "_"
        },
        lateral_raises: {
            weight: "_",
            reps: "_"
        },
        incline_bench_press: {
            weight: "_",
            reps: "_"
        },
        tricep_rope_extension: {
            weight: "_",
            reps: "_"
        },
        skull_crusher: {
            weight: "_",
            reps: "_"
        },
        peck_deck_fly: {
            weight: "_",
            reps: "_"
        },
    };

    // Ads contents of addedExercises to exercises property of activeWorkout object
    Object.assign(activeWorkout.exercises, addedExercises);

    // Ads workout type under the workout_type property 
    activeWorkout.workout_type = "01_push-workout";

} else if (workoutType==="02_pull-workout") {

    // Nested object that hold all exercises data.
    let addedExercises = {
        ro_deadlifts: {
            weight: "_",
            reps: "_"
        },
        pendlay_row: {
            weight: "_",
            reps: "_"
        },
        pull_up: {
            weight: "_",
            reps: "_"
        },
        short_cable_row: {
            weight: "_",
            reps: "_"
        },
        hammer_curls: {
            weight: "_",
            reps: "_"
        },
        cable_curls_bs: {
            weight: "_",
            reps: "_"
        },
        pull_down_n_g: {
            weight: "_",
            reps: "_"
        },
    };

    // Ads contents of addedExercises to exercises property of activeWorkout object
    Object.assign(activeWorkout.exercises, addedExercises);

    // Ads workout type under the workout_type property 
    activeWorkout.workout_type = "02_pull-workout";

} else if (workoutType==="03_leg-workout") {
    
    // Nested object that hold all exercises data.
    let addedExercises = {
        front_squat: {
            weight: "_",
            reps: "_"
        },
        quad_ext: {
            weight: "_",
            reps: "_"
        },
        incline_dumb_p: {
            weight: "_",
            reps: "_"
        },
        later_raises_s: {
            weight: "_",
            reps: "_"
        },
        tricep_ext_e: {
            weight: "_",
            reps: "_"
        },
        cable_chest_fl: {
            weight: "_",
            reps: "_"
        },
        dips: {
            weight: "_",
            reps: "_"
        },
    };

    // Ads contents of addedExercises to exercises property of activeWorkout object
    Object.assign(activeWorkout.exercises, addedExercises);

    // Ads workout type under the workout_type property 
    activeWorkout.workout_type = "03_leg-workout";

} else if (workoutType==="04_pull-workout") {
    
    // Nested object that hold all exercises data.
    let addedExercises = {
        pull_downs: {
            weight: "_",
            reps: "_"
        },
        pull_up_n_2DS: {
            weight: "_",
            reps: "_"
        },
        machine_curls_s: {
            weight: "_",
            reps: "_"
        },
        rev_peck_deck: {
            weight: "_",
            reps: "_"
        },
        rope_curls_obe_roki_1DS: {
            weight: "_",
            reps: "_"
        },
        hamstring_curls: {
            weight: "_",
            reps: "_"
        },
        lunges: {
            weight: "_",
            reps: "_"
        },
    };

    // Ads contents of addedExercises to exercises property of activeWorkout object
    Object.assign(activeWorkout.exercises, addedExercises);

    // Ads workout type under the workout_type property 
    activeWorkout.workout_type = "03_leg-workout";
}
// ::::: Exercise type :::::



// ::::: Exercise tracker :::::

// ::::: Variables :::::
let saveRepsBtn = document.querySelector("#save-reps-button");
// ::::: Variables :::::

/** Keeps track of on witch workout and witch set and rep we are */
function keepTrack() {
    console.log(`Current count is ${activeWorkout.counter}`);
    console.log(`Adding +1 to counter`);
    activeWorkout.counter += 1;
}
keepTrack()

/** Activates the keepTrack function once button is pressed */
saveRepsBtn.addEventListener("click", keepTrack);
// ::::: Exercise tracker :::::