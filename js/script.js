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
    } 
    // else if (reps.length > 9) {
    //     window.alert("Dude chill!");
    // }
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
- Check what type of Exercise is selected based on page tittle.
- Once Exercise type is seleced ads initial content.
*/

if (workoutType==="01_push-workout") {

    // Nested object that hold all exercises data.
    let addedExercises = {
        squat: {
            display_name: "SQUAT",
            weight: "_",
            reps: "_"
        },
        hack_squat: {
            display_name: "HACK SQUAT",
            weight: "_",
            reps: "_"
        },
        lateral_raises: {
            display_name: "LATERAL RAISES",
            weight: "_",
            reps: "_"
        },
        incline_bench_press: {
            display_name: "IN. BENCH",
            weight: "_",
            reps: "_"
        },
        tricep_rope_extension: {
            display_name: "TRICEP R. EXT",
            weight: "_",
            reps: "_"
        },
        skull_crusher: {
            display_name: "SKULL CRUSHER",
            weight: "_",
            reps: "_"
        },
        peck_deck_fly: {
            display_name: "PECK DECK FLY",
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
            display_name: "RO. DEADLIFT",
            weight: "_",
            reps: "_"
        },
        pendlay_row: {
            display_name: "PENDALY ROW",
            weight: "_",
            reps: "_"
        },
        pull_up: {
            display_name: "PULL UP",
            weight: "_",
            reps: "_"
        },
        short_cable_row: {
            display_name: "SH. CABLE ROW",
            weight: "_",
            reps: "_"
        },
        hammer_curls: {
            display_name: "HAMMER CURLS",
            weight: "_",
            reps: "_"
        },
        cable_curls_bs: {
            display_name: "CABLE CURLS BS.",
            weight: "_",
            reps: "_"
        },
        pull_down_n_g: {
            display_name: "PULL DOWN N-G.",
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
            display_name: "FRONT SQUAT",
            weight: "_",
            reps: "_"
        },
        quad_ext: {
            display_name: "QUAD EX.",
            weight: "_",
            reps: "_"
        },
        incline_dumb_p: {
            display_name: "INCLINE DU: PRESS",
            weight: "_",
            reps: "_"
        },
        later_raises_s: {
            display_name: "LA. C. RAISES",
            weight: "_",
            reps: "_"
        },
        tricep_ext_e: {
            display_name: "TRICEP EX. EL.",
            weight: "_",
            reps: "_"
        },
        cable_chest_fl: {
            display_name: "CABLE CHEST FLY",
            weight: "_",
            reps: "_"
        },
        dips: {
            display_name: "DIPS",
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
            display_name: "PULL DOWNS",
            weight: "_",
            reps: "_"
        },
        pull_up_n_2DS: {
            display_name: "PULL UP N. 2DS",
            weight: "_",
            reps: "_"
        },
        machine_curls_s: {
            display_name: "MACHINE C. CURLS",
            weight: "_",
            reps: "_"
        },
        rev_peck_deck: {
            display_name: "RE. PECK DECK FLY",
            weight: "_",
            reps: "_"
        },
        rope_curls_obe_roki_1DS: {
            display_name: "ROPE CURLS 1DS B. H.",
            weight: "_",
            reps: "_"
        },
        hamstring_curls: {
            display_name: "HAMSTRING CURLS",
            weight: "_",
            reps: "_"
        },
        lunges: {
            display_name: "LUNGES",
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

    if (activeWorkout.counter === 0) {

        /** Makes initial content appear.
         * Select the previous-workout & current-workout section.
         * Enters initial contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.squat.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.squat.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;
    } else if (activeWorkout.counter <= 4 && activeWorkout.counter != 0) {
        // Exercise selected: SQUAT
        console.log(`Current count ${activeWorkout.counter} curently adding data to SQUAT exercise`);

        /** Here is where data for reps and sets will be added for SQUAT */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.squat.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.squat.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 4 && activeWorkout.counter <= 7) {
        // Exercise selected: HACK SQUAT
        console.log(`Current count ${activeWorkout.counter} curently adding data to HACK SQUAT exercise`);

        /** Here is where data for reps and sets will be added for HACK SQUAT */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Ads +1 to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.hack_squat.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.hack_squat.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 7 && activeWorkout.counter <= 11) {
        // Exercise selected: LATERAL RAISES
        console.log(`Current count ${activeWorkout.counter} curently adding data to LATERAL RAISES exercise`);

        /** Here is where data for reps and sets will be added for LATERAL RAISES */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Ads +1 to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.lateral_raises.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.lateral_raises.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;
        
    } else if (activeWorkout.counter >= 11 && activeWorkout.counter <= 14) {
        // Exercise selected: INCLINE BENCH PRESS
        console.log(`Current count ${activeWorkout.counter} curently adding data to INCLINE BENCH PRESS exercise`);

        /** Here is where data for reps and sets will be added for INCLINE BENCH PRESS */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Ads +1 to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.incline_bench_press.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.incline_bench_press.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 14 && activeWorkout.counter <= 18) {
        // Exercise selected: TRICEP ROPE EXENSION
        console.log(`Current count ${activeWorkout.counter} curently adding data to TRICEP ROPE EXENSION exercise`);

        /** Here is where data for reps and sets will be added for TRICEP ROPE EXENSION */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Ads +1 to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.tricep_rope_extension.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.tricep_rope_extension.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 18 && activeWorkout.counter <= 22) {
        // Exercise selected: SKULL CRUSHER
        console.log(`Current count ${activeWorkout.counter} curently adding data to SKULL CRUSHER exercise`);

        /** Here is where data for reps and sets will be added for SKULL CRUSHER */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Ads +1 to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.skull_crusher.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.skull_crusher.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 22 && activeWorkout.counter <= 25) {
        // Exercise selected: PECK DECK FLY
        console.log(`Current count ${activeWorkout.counter} curently adding data to PECK DECK FLY exercise`);

        /** Here is where data for reps and sets will be added for PECK DECK FLY */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Ads +1 to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.peck_deck_fly.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.peck_deck_fly.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

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

    if (activeWorkout.counter === 0) {

        /** Makes initial content appear.
         * Select the previous-workout & current-workout section.
         * Enters initial contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.ro_deadlifts.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.ro_deadlifts.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;
    }
    else if (activeWorkout.counter <= 3) {
        // Exercise selected: ROMANIAN DEADLIFT
        console.log(`Current count ${activeWorkout.counter} curently adding data to ROMANIAN DEADLIFT exercise`);

        /** Here is where data for reps and sets will be added for ROMANIAN DEADLIFT */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.ro_deadlifts.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.ro_deadlifts.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 3 && activeWorkout.counter <= 7) {
        // Exercise selected: PENDALY ROW
        console.log(`Current count ${activeWorkout.counter} curently adding data to PENDALY ROW exercise`);

        /** Here is where data for reps and sets will be added for PENDALY ROW */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.pendlay_row.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.pendlay_row.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 7 && activeWorkout.counter <= 11) {
        // Exercise selected: PULL UP
        console.log(`Current count ${activeWorkout.counter} curently adding data to PULL UP exercise`);

        /** Here is where data for reps and sets will be added for PULL UP */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.pull_up.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.pull_up.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 11 && activeWorkout.counter <= 14) {
        // Exercise selected: SHORT CABLE ROW
        console.log(`Current count ${activeWorkout.counter} curently adding data to SHORT CABLE ROW exercise`);

        /** Here is where data for reps and sets will be added for SHORT CABLE ROW */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.short_cable_row.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.short_cable_row.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 14 && activeWorkout.counter <= 17) {
        // Exercise selected: HAMMER CURLS
        console.log(`Current count ${activeWorkout.counter} curently adding data to HAMMER CURLS exercise`);

        /** Here is where data for reps and sets will be added for HAMMER CURLS */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.hammer_curls.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.hammer_curls.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 17 && activeWorkout.counter <= 20) {
        // Exercise selected: CABLE CURLS BICEPS
        console.log(`Current count ${activeWorkout.counter} curently adding data to CABLE CURLS BICEPS exercise`);

        /** Here is where data for reps and sets will be added for CABLE CURLS BICEPS */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.cable_curls_bs.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.cable_curls_bs.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

    } else if (activeWorkout.counter >= 20 && activeWorkout.counter <= 23) {
        // Exercise selected: PULL DOWN N-GRIP
        console.log(`Current count ${activeWorkout.counter} curently adding data to PULL DOWN N-GRIP exercise`);

        /** Here is where data for reps and sets will be added for PULL DOWN N-GRIP */

        /** Changes content of previous-workout section.
         * Select the previous-workout & current-workout section.
         * Enters corect contetn based on exercise.
         * Adds 1+ to counter
         */
        let previousWorkoutSection = document.querySelector(".previous-workout");
        previousWorkoutSection.innerHTML = 
        `<p class="body-1">Previously on...</p>
        <h1 class="display-6">${activeWorkout.exercises.pull_down_n_g.display_name}</h1>
        <!-- Previous workout -->
        <div class="previous-stats body-1">
        </div>
        <!-- Previous workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        let currentWorkoutSection = document.querySelector(".current-workout");
        currentWorkoutSection.innerHTML = 
        `<p class="body-1">Current workout progress...</p>
        <h1 class="display-6">${activeWorkout.exercises.pull_down_n_g.display_name}</h1>
        <!-- Current workout -->
        <div class="current-stats body-1">
        </div>
        <!-- Current workout -->
        <!-- Section crop marks -->
        <div class="section-crop-marks">
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="crop-line" d="M0 1.5L20.5 1.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <!-- Section crop marks -->`

        activeWorkout.counter += 1;

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

/** Keeps trachk of workout type
 * Makes inital content appear
 */

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

// Activates keepTrack() on load. This displays initial content
keepTrack()

// ::::: Exercise tracker :::::