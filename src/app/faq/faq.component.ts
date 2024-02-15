import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FAQComponent {
  toggleAnswer(id: number): void {
    const answer = document.getElementById('faq' + id);
    if (answer) {
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    }
  }
}
