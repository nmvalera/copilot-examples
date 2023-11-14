// Write a rock, paper, scissors game

package main

import (
	"fmt"
	"math/rand"
	"time"
)

// GetUserChoice gets the user's choice
// - prompt the user for their choice
// - enable the user to enter their choice using shorthand notation: (r)ock, (p)aper, (s)cissors
// - if the user enters an invalid choice prompt them again with the same message
// - return the user's choice as a string
func GetUserChoice() string {
	var choice string
	for choice != "r" && choice != "p" && choice != "s" {
		fmt.Println("Choose (r)ock", Emojis("r"), "(p)aper", Emojis("p"), "or (s)cissors", Emojis("s"))
		fmt.Scanln(&choice)
	}
	return choice
}

// GetComputerChoice gets the computer's choice
// - generate a random number between 0 and 2
// - return the computer's choice as a string
func GetComputerChoice() string {
	rand.Seed(time.Now().UnixNano())
	choice := rand.Intn(3)
	if choice == 0 {
		return "r"
	} else if choice == 1 {
		return "p"
	} else {
		return "s"
	}
}

// DoesUserWin determines if the user wins
func DoesUserWin(userChoice string, computerChoice string) bool {
	if userChoice == "r" && computerChoice == "s" {
		return true
	} else if userChoice == "p" && computerChoice == "r" {
		return true
	} else if userChoice == "s" && computerChoice == "p" {
		return true
	} else {
		return false
	}
}

// Emojis returns the emojis for rock, paper, and scissors
func Emojis(choice string) string {
	if choice == "r" {
		return "👊"
	} else if choice == "p" {
		return "🖐"
	} else {
		return "✌️"
	}
}

// PlayGame plays the game
// - get the user's choice
// - get the computer's choice
// - determine if the user wins
// - display the results
// - keep track of the number of wins, losses and ties
// - prompt the user to play again
func PlayGame() {
	var wins int
	var losses int
	var ties int
	var playAgain string
	for playAgain != "n" {
		userChoice := GetUserChoice()
		computerChoice := GetComputerChoice()

		fmt.Println("Rock", Emojis("r"), "Paper", Emojis("p"), "Scissors", Emojis("s"), "Shoot!")
		fmt.Println("----------")

		// Print the user's choice and the computer's choice
		fmt.Println("User:", Emojis(userChoice))
		fmt.Println("Computer:", Emojis(computerChoice))

		// Print a separator line to make the output easier to read
		fmt.Println("----------")
		if userChoice == computerChoice {
			fmt.Println("Tie!")
			ties++
		} else if DoesUserWin(userChoice, computerChoice) {
			fmt.Println("You win!")
			wins++
		} else {
			fmt.Println("You lose!")
			losses++
		}
		fmt.Println("----------")
		fmt.Println("Score:")
		fmt.Println("+-------+-------+-------+")
		fmt.Println("| Wins  | Losses| Ties  |")
		fmt.Println("+-------+-------+-------+")
		fmt.Printf("| %5d | %5d | %5d |\n", wins, losses, ties)
		fmt.Println("+-------+-------+-------+")
		fmt.Println("")
		fmt.Println("Play again? (y/n)")
		fmt.Scanln(&playAgain)
	}
}

func main() {
	PlayGame()
}
