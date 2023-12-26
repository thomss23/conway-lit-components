export interface ClickEvent extends CustomEvent {
    detail: {
        name: string;
    };
}
