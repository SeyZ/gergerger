/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type CompaniesCustomizer = CollectionCustomizer<Schema, 'companies'>;
export type CompaniesRecord = TPartialRow<Schema, 'companies'>;
export type CompaniesConditionTree = TConditionTree<Schema, 'companies'>;
export type CompaniesFilter = TPaginatedFilter<Schema, 'companies'>;
export type CompaniesSortClause = TSortClause<Schema, 'companies'>;
export type CompaniesAggregation = TAggregation<Schema, 'companies'>;

export type ContactsCustomizer = CollectionCustomizer<Schema, 'contacts'>;
export type ContactsRecord = TPartialRow<Schema, 'contacts'>;
export type ContactsConditionTree = TConditionTree<Schema, 'contacts'>;
export type ContactsFilter = TPaginatedFilter<Schema, 'contacts'>;
export type ContactsSortClause = TSortClause<Schema, 'contacts'>;
export type ContactsAggregation = TAggregation<Schema, 'contacts'>;

export type DocumentsCustomizer = CollectionCustomizer<Schema, 'documents'>;
export type DocumentsRecord = TPartialRow<Schema, 'documents'>;
export type DocumentsConditionTree = TConditionTree<Schema, 'documents'>;
export type DocumentsFilter = TPaginatedFilter<Schema, 'documents'>;
export type DocumentsSortClause = TSortClause<Schema, 'documents'>;
export type DocumentsAggregation = TAggregation<Schema, 'documents'>;

export type TransactionsCustomizer = CollectionCustomizer<Schema, 'transactions'>;
export type TransactionsRecord = TPartialRow<Schema, 'transactions'>;
export type TransactionsConditionTree = TConditionTree<Schema, 'transactions'>;
export type TransactionsFilter = TPaginatedFilter<Schema, 'transactions'>;
export type TransactionsSortClause = TSortClause<Schema, 'transactions'>;
export type TransactionsAggregation = TAggregation<Schema, 'transactions'>;


export type Schema = {
  'companies': {
    plain: {
      'account': string | null;
      'bank_name': string | null;
      'bank_statement_id': string | null;
      'certificate_of_incorporation_id': string | null;
      'company_bic': string | null;
      'company_iban': string | null;
      'created_at': string | null;
      'credit_card': any | null;
      'description': string | null;
      'fa_assignee': string | null;
      'headquarter': string | null;
      'id': number;
      'industry': string | null;
      'name': string;
      'note': string | null;
      'passport_id': string | null;
      'proof_of_address_id': string | null;
      'status': string | null;
      'updated_at': string | null;
    };
    nested: {};
    flat: {};
  };
  'contacts': {
    plain: {
      'company_id': number | null;
      'email': string | null;
      'first_name': string | null;
      'id': number;
      'last_name': string | null;
      'phone': string | null;
      'position': string | null;
    };
    nested: {
      'company': Schema['companies']['plain'] & Schema['companies']['nested'];
    };
    flat: {
      'company:account': string | null;
      'company:bank_name': string | null;
      'company:bank_statement_id': string | null;
      'company:certificate_of_incorporation_id': string | null;
      'company:company_bic': string | null;
      'company:company_iban': string | null;
      'company:created_at': string | null;
      'company:credit_card': any | null;
      'company:description': string | null;
      'company:fa_assignee': string | null;
      'company:headquarter': string | null;
      'company:id': number;
      'company:industry': string | null;
      'company:name': string;
      'company:note': string | null;
      'company:passport_id': string | null;
      'company:proof_of_address_id': string | null;
      'company:status': string | null;
      'company:updated_at': string | null;
    };
  };
  'documents': {
    plain: {
      'company_id': number | null;
      'file_id': string;
      'id': number;
      'is_verified': boolean | null;
      'type': string | null;
      'url': string | null;
    };
    nested: {
      'company': Schema['companies']['plain'] & Schema['companies']['nested'];
    };
    flat: {
      'company:account': string | null;
      'company:bank_name': string | null;
      'company:bank_statement_id': string | null;
      'company:certificate_of_incorporation_id': string | null;
      'company:company_bic': string | null;
      'company:company_iban': string | null;
      'company:created_at': string | null;
      'company:credit_card': any | null;
      'company:description': string | null;
      'company:fa_assignee': string | null;
      'company:headquarter': string | null;
      'company:id': number;
      'company:industry': string | null;
      'company:name': string;
      'company:note': string | null;
      'company:passport_id': string | null;
      'company:proof_of_address_id': string | null;
      'company:status': string | null;
      'company:updated_at': string | null;
    };
  };
  'transactions': {
    plain: {
      'amount': number;
      'beneficiary_bic': string;
      'beneficiary_company_id': number | null;
      'beneficiary_iban': string;
      'created_at': string | null;
      'emitter_bic': string;
      'emitter_company_id': number | null;
      'emitter_iban': string;
      'fa_assignee': string | null;
      'fee_amount': number | null;
      'id': number;
      'note': string | null;
      'reference': string | null;
      'status': string | null;
      'updated_at': string | null;
      'vat_amount': number | null;
    };
    nested: {
      'beneficiary_company': Schema['companies']['plain'] & Schema['companies']['nested'];
      'emitter_company': Schema['companies']['plain'] & Schema['companies']['nested'];
    };
    flat: {
      'beneficiary_company:account': string | null;
      'beneficiary_company:bank_name': string | null;
      'beneficiary_company:bank_statement_id': string | null;
      'beneficiary_company:certificate_of_incorporation_id': string | null;
      'beneficiary_company:company_bic': string | null;
      'beneficiary_company:company_iban': string | null;
      'beneficiary_company:created_at': string | null;
      'beneficiary_company:credit_card': any | null;
      'beneficiary_company:description': string | null;
      'beneficiary_company:fa_assignee': string | null;
      'beneficiary_company:headquarter': string | null;
      'beneficiary_company:id': number;
      'beneficiary_company:industry': string | null;
      'beneficiary_company:name': string;
      'beneficiary_company:note': string | null;
      'beneficiary_company:passport_id': string | null;
      'beneficiary_company:proof_of_address_id': string | null;
      'beneficiary_company:status': string | null;
      'beneficiary_company:updated_at': string | null;
      'emitter_company:account': string | null;
      'emitter_company:bank_name': string | null;
      'emitter_company:bank_statement_id': string | null;
      'emitter_company:certificate_of_incorporation_id': string | null;
      'emitter_company:company_bic': string | null;
      'emitter_company:company_iban': string | null;
      'emitter_company:created_at': string | null;
      'emitter_company:credit_card': any | null;
      'emitter_company:description': string | null;
      'emitter_company:fa_assignee': string | null;
      'emitter_company:headquarter': string | null;
      'emitter_company:id': number;
      'emitter_company:industry': string | null;
      'emitter_company:name': string;
      'emitter_company:note': string | null;
      'emitter_company:passport_id': string | null;
      'emitter_company:proof_of_address_id': string | null;
      'emitter_company:status': string | null;
      'emitter_company:updated_at': string | null;
    };
  };
};
