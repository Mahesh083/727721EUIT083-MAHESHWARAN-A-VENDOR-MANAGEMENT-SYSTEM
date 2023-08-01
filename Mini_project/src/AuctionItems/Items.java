package AuctionItems;

public class Items extends AuctionItem {
    public Items(int id, String name, String description, double startingPrice) {
        super(id, name, description, startingPrice);
    }

    @Override
    public void displayDetails() {
        System.out.println("Item ID: " + getId());
        System.out.println("Name: " + getName());
        System.out.println("Description: " + getDescription());
        System.out.println("Current Highest Bid: " + getCurrentHighestBid());
        System.out.println("Highest Bidder ID: " + getHighestBidderId());
        System.out.println("---------------");
    }
}