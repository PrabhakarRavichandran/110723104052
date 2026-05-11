class Notification:
    def __init__(self, title, message, priority):
        self.title = title
        self.message = message
        self.priority = priority
        self.read = False

    def mark_as_read(self):
        self.read = True

    def __str__(self):
        status = "Read" if self.read else "Unread"
        return f"[{self.priority}] {self.title} - {status}"


class PriorityInbox:
    def __init__(self):
        self.notifications = []

    def add_notification(self, notification):
        self.notifications.append(notification)

    def get_high_priority(self):
        return [
            n for n in self.notifications
            if n.priority.lower() == "high"
        ]

    def show_notifications(self):
        for notification in self.notifications:
            print(notification)


if __name__ == "__main__":
    inbox = PriorityInbox()

    inbox.add_notification(
        Notification(
            "Server Down",
            "Server is unreachable",
            "High"
        )
    )

    inbox.add_notification(
        Notification(
            "Meeting Reminder",
            "Client meeting at 5 PM",
            "Medium"
        )
    )

    print("All Notifications:")
    inbox.show_notifications()

    print("\nHigh Priority Notifications:")
    for n in inbox.get_high_priority():
        print(n)