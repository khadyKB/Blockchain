import { Component, OnInit } from "@angular/core";
import { Node, Edge, ClusterNode } from "@swimlane/ngx-graph";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BlockchainService } from "src/app/shared/blockchain.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  mapFormGroup: FormGroup;
  entryDate: string;
  idBlock: number;
  ipAddress: string;
  balance: number;
  node = [];

  // tslint:disable-next-line: variable-name
  constructor(
    private _formBuilder: FormBuilder,
    private blockchainService: BlockchainService
  ) {}

  ngOnInit() {
    /*=this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });*/

    this.node = this.blockchainService.getPeers();

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  test(node) {
    this.entryDate = node.date;
    this.ipAddress = node.ipAddress;
    this.idBlock = node.idBlock;
    this.balance = node.balance;
    this.blockchainService.getBlockchain();
    this.blockchainService.getBalance();
    this.blockchainService.getPeers();
    this.blockchainService.getTransaction();
  }
}
