# Write a rock, paper, scissors game

# define function get_user_choice that prompts user with options and get user's choice then return it. 
# - use input() to get user's choice
# - enables user to provide inputs as shortcuts: (r)ock, (p)aper, (s)cissors
# - if user inputs invalid option, print error message and prompt again
# - return user's choice
def get_user_choice():
    user_choice = input("Enter your choice: (r)ock, (p)aper, (s)cissors: ")
    while user_choice not in ['r', 'p', 's']:
        print("Invalid choice, please try again.")
        user_choice = input("Enter your choice: (r)ock, (p)aper, (s)cissors: ")
    return user_choice

# define function get_computer_choice that randomly generates computer's choice and return it
# - use random.randint() to generate random number between 1 and 3
# - if random number is 1, return 'r'
# - if random number is 2, return 'p'
# - if random number is 3, return 's'
def get_computer_choice():
    import random
    computer_choice = random.randint(1,3)
    if computer_choice == 1:
        return 'r'
    elif computer_choice == 2:
        return 'p'
    else:
        return 's'

# define function does_user_win that takes in user's choice and computer's choice and return 
# - True if user wins
# - False if user loses
# - None if it's a tie
def does_user_win(user_choice, computer_choice):
    # rock beats scissors
    if user_choice == 'r' and computer_choice == 's':
        return True
    # paper beats rock
    elif user_choice == 'p' and computer_choice == 'r':
        return True
    # scissors beats paper
    elif user_choice == 's' and computer_choice == 'p':
        return True
    # tie
    elif user_choice == computer_choice:
        return None
    # user loses
    else:
        return False
    
# define main function that handles all the logic
# - get user choice
# - get computer's choice
# - determine the winner
# - ask user if they want to play again
# - keep track of wins and losses
# - print out wins and losses on a single line
def main():
    wins = 0
    losses = 0
    while True:
        # get user choice
        user_choice = get_user_choice()
        print("You chose: " + user_choice)

        # get computer choice
        computer_choice = get_computer_choice()
        print("Computer chose: " + computer_choice)

        # determine the winner
        result = does_user_win(user_choice, computer_choice)

        # print out result
        if result == True:
            print("You win!")
            wins += 1
        elif result == False:
            print("You lose!")
            losses += 1
        else:
            print("It's a tie!")

        # print out wins and losses
        print("Wins: " + str(wins) + " Losses: " + str(losses))

        # ask user if they want to play again
        play_again = input("Play again? (y/n): ")
        if play_again != 'y':
            break

# run main function
main()
