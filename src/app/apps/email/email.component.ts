import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Message } from './message';
import { MailService } from './email.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MailService]
})
export class EmailComponent implements OnInit {
  closeResult: string;
  messages: Message[];
  selectedMessage: Message;
  messageOpen = false;

  constructor(private mailService: MailService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.mailService.getMessages().then(messages => {
      this.messages = messages;
      this.selectedMessage = this.messages[1];
    });
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

  // This is for the email compose
  open2(content) {
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
