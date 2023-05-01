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

// ::: Variables :::
let workoutType = document.title;
let activeWorkout= {
    workout_type: "_",
    exercises: {},
    counter: 0
};
// ::: Variables :::

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


// ::::: Push Workout flow :::::

/** Outlines the flow of Push workout
 * Adds +1 to activeWorkout.counter everytime it's called
 * The activeWorkout.counter determines to witch exercise data will be entered.
 */

function pushWorkoutFlow() {

    activeWorkout.counter += 1;

    if (activeWorkout.counter <= 4) {
        // Exercise selected: SQUAT
        console.log(`Current count ${activeWorkout.counter} curently adding data to SQUAT exercise`);

        /** Here is where data for reps and sets will be added for SQUAT */
    } else if (activeWorkout.counter >= 4 && activeWorkout.counter <= 7) {
        // Exercise selected: HACK SQUAT
        console.log(`Current count ${activeWorkout.counter} curently adding data to HACK SQUAT exercise`);

        /** Here is where data for reps and sets will be added for HACK SQUAT */
    } else if (activeWorkout.counter >= 7 && activeWorkout.counter <= 11) {
        // Exercise selected: LATERAL RAISES
        console.log(`Current count ${activeWorkout.counter} curently adding data to LATERAL RAISES exercise`);

        /** Here is where data for reps and sets will be added for LATERAL RAISES */
    } else if (activeWorkout.counter >= 11 && activeWorkout.counter <= 14) {
        // Exercise selected: INCLINE BENCH PRESS
        console.log(`Current count ${activeWorkout.counter} curently adding data to INCLINE BENCH PRESS exercise`);

        /** Here is where data for reps and sets will be added for INCLINE BENCH PRESS */
    } else if (activeWorkout.counter >= 14 && activeWorkout.counter <= 18) {
        // Exercise selected: TRICEP ROPE EXENSION
        console.log(`Current count ${activeWorkout.counter} curently adding data to TRICEP ROPE EXENSION exercise`);

        /** Here is where data for reps and sets will be added for TRICEP ROPE EXENSION */
    } else if (activeWorkout.counter >= 18 && activeWorkout.counter <= 22) {
        // Exercise selected: SKULL CRUSHER
        console.log(`Current count ${activeWorkout.counter} curently adding data to SKULL CRUSHER exercise`);

        /** Here is where data for reps and sets will be added for SKULL CRUSHER */
    } else if (activeWorkout.counter >= 22 && activeWorkout.counter <= 25) {
        // Exercise selected: PECK DECK FLY
        console.log(`Current count ${activeWorkout.counter} curently adding data to PECK DECK FLY exercise`);

        /** Here is where data for reps and sets will be added for PECK DECK FLY */
    } else if (activeWorkout.counter > 25) {
        // Workout finished statement
        console.log(`Push workout has been completed`);
    }
};

// ::::: Push Workout flow :::::



// ::::: First pull Workout flow :::::

/** Outlines the flow of First pull workout
 * Adds +1 to activeWorkout.counter everytime it's called
 * The activeWorkout.counter determines to witch exercise data will be entered.
 */

function firstPullWorkoutFlow() {

    activeWorkout.counter += 1;

    if (activeWorkout.counter <= 3) {
        // Exercise selected: ROMANIAN DEADLIFT
        console.log(`Current count ${activeWorkout.counter} curently adding data to ROMANIAN DEADLIFT exercise`);

        /** Here is where data for reps and sets will be added for ROMANIAN DEADLIFT */
    } else if (activeWorkout.counter >= 3 && activeWorkout.counter <= 7) {
        // Exercise selected: PENDALY ROW
        console.log(`Current count ${activeWorkout.counter} curently adding data to PENDALY ROW exercise`);

        /** Here is where data for reps and sets will be added for PENDALY ROW */
    } else if (activeWorkout.counter >= 7 && activeWorkout.counter <= 11) {
        // Exercise selected: PULL UP
        console.log(`Current count ${activeWorkout.counter} curently adding data to PULL UP exercise`);

        /** Here is where data for reps and sets will be added for PULL UP */
    } else if (activeWorkout.counter >= 11 && activeWorkout.counter <= 14) {
        // Exercise selected: SHORT CABLE ROW
        console.log(`Current count ${activeWorkout.counter} curently adding data to SHORT CABLE ROW exercise`);

        /** Here is where data for reps and sets will be added for SHORT CABLE ROW */
    } else if (activeWorkout.counter >= 14 && activeWorkout.counter <= 17) {
        // Exercise selected: HAMMER CURLS
        console.log(`Current count ${activeWorkout.counter} curently adding data to HAMMER CURLS exercise`);

        /** Here is where data for reps and sets will be added for HAMMER CURLS */
    } else if (activeWorkout.counter >= 17 && activeWorkout.counter <= 20) {
        // Exercise selected: CABLE CURLS BICEPS
        console.log(`Current count ${activeWorkout.counter} curently adding data to CABLE CURLS BICEPS exercise`);

        /** Here is where data for reps and sets will be added for CABLE CURLS BICEPS */
    } else if (activeWorkout.counter >= 20 && activeWorkout.counter <= 23) {
        // Exercise selected: PULL DOWN N-GRIP
        console.log(`Current count ${activeWorkout.counter} curently adding data to PULL DOWN N-GRIP exercise`);

        /** Here is where data for reps and sets will be added for PULL DOWN N-GRIP */
    } else if (activeWorkout.counter > 23) {
        // Workout finished statement
        console.log(`First pull workout has been completed`);
    }
};

// ::::: First pull Workout flow :::::



// ::::: Leg Workout flow :::::

/** Outlines the flow of Leg workout
 * Adds +1 to activeWorkout.counter everytime it's called
 * The activeWorkout.counter determines to witch exercise data will be entered.
 */

function firstLeglWorkoutFlow() {

    activeWorkout.counter += 1;

    if (activeWorkout.counter <= 3) {
        // Exercise selected: FRONT SQUAT
        console.log(`Current count ${activeWorkout.counter} curently adding data to FRONT SQUAT exercise`);

        /** Here is where data for reps and sets will be added for FRONT SQUAT */
    } else if (activeWorkout.counter >= 3 && activeWorkout.counter <= 12) {
        // Exercise selected: QUAD EXTENSIONS
        console.log(`Current count ${activeWorkout.counter} curently adding data to QUAD EXTENSIONS exercise`);

        /** Here is where data for reps and sets will be added for QUAD EXTENSIONS */
    } else if (activeWorkout.counter >= 12 && activeWorkout.counter <= 15) {
        // Exercise selected: INCLINE DUMBBELL PRESS
        console.log(`Current count ${activeWorkout.counter} curently adding data to INCLINE DUMBBELL PRESS exercise`);

        /** Here is where data for reps and sets will be added for INCLINE DUMBBELL PRESS */
    } else if (activeWorkout.counter >= 15 && activeWorkout.counter <= 18) {
        // Exercise selected: LATERAL RAISES
        console.log(`Current count ${activeWorkout.counter} curently adding data to LATERAL RAISES exercise`);

        /** Here is where data for reps and sets will be added for LATERAL RAISES */
    } else if (activeWorkout.counter >= 18 && activeWorkout.counter <= 22) {
        // Exercise selected: LATERAL RAISES CABLE
        console.log(`Current count ${activeWorkout.counter} curently adding data to LATERAL RAISES CABLE exercise`);

        /** Here is where data for reps and sets will be added for LATERAL RAISES CABLE */
    } else if (activeWorkout.counter >= 22 && activeWorkout.counter <= 26) {
        // Exercise selected: TRICEP EXTENSIONS ELASTIC
        console.log(`Current count ${activeWorkout.counter} curently adding data to TRICEP EXTENSIONS ELASTIC exercise`);

        /** Here is where data for reps and sets will be added for TRICEP EXTENSIONS ELASTIC */
    } else if (activeWorkout.counter >= 26 && activeWorkout.counter <= 29) {
        // Exercise selected: CABLE CHEST FLYES
        console.log(`Current count ${activeWorkout.counter} curently adding data to CABLE CHEST FLYES exercise`);

        /** Here is where data for reps and sets will be added for CABLE CHEST FLYES */
    } else if (activeWorkout.counter >= 29 && activeWorkout.counter <= 32) {
        // Exercise selected: DIPS 2DS
        console.log(`Current count ${activeWorkout.counter} curently adding data to DIPS 2DS exercise`);

        /** Here is where data for reps and sets will be added for DIPS 2DS */
    } else if (activeWorkout.counter > 32) {
        // Workout finished statement
        console.log(`FIrst leg workout has been completed`);
    }
};

// ::::: Leg Workout flow :::::



// ::::: Second pull wokrout flow :::::

/** Outlines the flow of Second pull wokrout
 * Adds +1 to activeWorkout.counter everytime it's called
 * The activeWorkout.counter determines to witch exercise data will be entered.
 */

function secondPullWorkoutFlow() {

    activeWorkout.counter += 1;

    if (activeWorkout.counter <= 4) {
        // Exercise selected: PULL DOWN
        console.log(`Current count ${activeWorkout.counter} curently adding data to PULL DOWN exercise`);

        /** Here is where data for reps and sets will be added for PULL DOWN */
    } else if (activeWorkout.counter >= 4 && activeWorkout.counter <= 7) {
        // Exercise selected: MACHINE ROWS
        console.log(`Current count ${activeWorkout.counter} curently adding data to MACHINE ROWS exercise`);

        /** Here is where data for reps and sets will be added for MACHINE ROWS */
    } else if (activeWorkout.counter >= 7 && activeWorkout.counter <= 11) {
        // Exercise selected: PULL UP
        console.log(`Current count ${activeWorkout.counter} curently adding data to PULL UP exercise`);

        /** Here is where data for reps and sets will be added for PULL UP */
    } else if (activeWorkout.counter >= 11 && activeWorkout.counter <= 14) {
        // Exercise selected: MACHINE CURLS
        console.log(`Current count ${activeWorkout.counter} curently adding data to MACHINE CURLS exercise`);

        /** Here is where data for reps and sets will be added for MACHINE CURLS */
    } else if (activeWorkout.counter >= 14 && activeWorkout.counter <= 18) {
        // Exercise selected: REVERSE PECK DECK
        console.log(`Current count ${activeWorkout.counter} curently adding data to REVERSE PECK DECK exercise`);

        /** Here is where data for reps and sets will be added for REVERSE PECK DECK */
    } else if (activeWorkout.counter >= 18 && activeWorkout.counter <= 21) {
        // Exercise selected: ROPE CURLS
        console.log(`Current count ${activeWorkout.counter} curently adding data to ROPE CURLS exercise`);

        /** Here is where data for reps and sets will be added for ROPE CURLS */
    } else if (activeWorkout.counter >= 21 && activeWorkout.counter <= 25) {
        // Exercise selected: HAMSTRING CURLS
        console.log(`Current count ${activeWorkout.counter} curently adding data to HAMSTRING CURLS exercise`);

        /** Here is where data for reps and sets will be added for HAMSTRING CURLS */
    } else if (activeWorkout.counter >= 25 && activeWorkout.counter <= 28) {
        // Exercise selected: LUNGES
        console.log(`Current count ${activeWorkout.counter} curently adding data to LUNGES exercise`);

        /** Here is where data for reps and sets will be added for LUNGES */
    } else if (activeWorkout.counter > 28) {
        // Workout finished statement
        console.log(`Second pull workout has been completed`);
    }
};

// ::::: Second pull wokrout flow :::::



// ::::: Exercise tracker :::::

// ::: Variables :::
let saveRepsBtn = document.querySelector("#save-reps-button");
// ::: Variables :::

/** Keeps track of on witch workout and witch set and rep we are */
function keepTrack() {
    // If statement check type of workout and adds coresponding workoutflow function.
    if (activeWorkout.workout_type === "01_push-workout") {
        console.log(`This is a ${activeWorkout.workout_type} workout`);
        pushWorkoutFlow();
    } else if (activeWorkout.workout_type === "02_pull-workout") {
        console.log(`This is a ${activeWorkout.workout_type} workout`);
        firstPullWorkoutFlow()
    } else if (activeWorkout.workout_type === "03_leg-workout") {
        console.log(`This is a ${activeWorkout.workout_type} workout`);
        firstLeglWorkoutFlow()
    } else if (activeWorkout.workout_type === "04_pull-workout") {
        console.log(`This is a ${activeWorkout.workout_type} workout`);
        secondPullWorkoutFlow()
    }
};

/** Activates the keepTrack function once button is pressed */
saveRepsBtn.addEventListener("click", keepTrack);
// ::::: Exercise tracker :::::