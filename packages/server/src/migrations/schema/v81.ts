/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { PoolClient } from 'pg';

const resourceTypes = [
  'AccessPolicy',
  'Account',
  'ActivityDefinition',
  'AdverseEvent',
  'Agent',
  'AllergyIntolerance',
  'Appointment',
  'AppointmentResponse',
  'AsyncJob',
  'AuditEvent',
  'Basic',
  'Binary',
  'BiologicallyDerivedProduct',
  'BodyStructure',
  'Bot',
  'BulkDataExport',
  'Bundle',
  'CapabilityStatement',
  'CarePlan',
  'CareTeam',
  'CatalogEntry',
  'ChargeItem',
  'ChargeItemDefinition',
  'Claim',
  'ClaimResponse',
  'ClientApplication',
  'ClinicalImpression',
  'CodeSystem',
  'Communication',
  'CommunicationRequest',
  'CompartmentDefinition',
  'Composition',
  'ConceptMap',
  'Condition',
  'Consent',
  'Contract',
  'Coverage',
  'CoverageEligibilityRequest',
  'CoverageEligibilityResponse',
  'DetectedIssue',
  'Device',
  'DeviceDefinition',
  'DeviceMetric',
  'DeviceRequest',
  'DeviceUseStatement',
  'DiagnosticReport',
  'DocumentManifest',
  'DocumentReference',
  'DomainConfiguration',
  'EffectEvidenceSynthesis',
  'Encounter',
  'Endpoint',
  'EnrollmentRequest',
  'EnrollmentResponse',
  'EpisodeOfCare',
  'EventDefinition',
  'Evidence',
  'EvidenceVariable',
  'ExampleScenario',
  'ExplanationOfBenefit',
  'FamilyMemberHistory',
  'Flag',
  'Goal',
  'GraphDefinition',
  'Group',
  'GuidanceResponse',
  'HealthcareService',
  'ImagingStudy',
  'Immunization',
  'ImmunizationEvaluation',
  'ImmunizationRecommendation',
  'ImplementationGuide',
  'InsurancePlan',
  'Invoice',
  'JsonWebKey',
  'Library',
  'Linkage',
  'List',
  'Location',
  'Login',
  'Measure',
  'MeasureReport',
  'Media',
  'Medication',
  'MedicationAdministration',
  'MedicationDispense',
  'MedicationKnowledge',
  'MedicationRequest',
  'MedicationStatement',
  'MedicinalProduct',
  'MedicinalProductAuthorization',
  'MedicinalProductContraindication',
  'MedicinalProductIndication',
  'MedicinalProductIngredient',
  'MedicinalProductInteraction',
  'MedicinalProductManufactured',
  'MedicinalProductPackaged',
  'MedicinalProductPharmaceutical',
  'MedicinalProductUndesirableEffect',
  'MessageDefinition',
  'MessageHeader',
  'MolecularSequence',
  'NamingSystem',
  'NutritionOrder',
  'Observation',
  'ObservationDefinition',
  'OperationDefinition',
  'OperationOutcome',
  'Organization',
  'OrganizationAffiliation',
  'Parameters',
  'PasswordChangeRequest',
  'Patient',
  'PaymentNotice',
  'PaymentReconciliation',
  'Person',
  'PlanDefinition',
  'Practitioner',
  'PractitionerRole',
  'Procedure',
  'Project',
  'ProjectMembership',
  'Provenance',
  'Questionnaire',
  'QuestionnaireResponse',
  'RelatedPerson',
  'RequestGroup',
  'ResearchDefinition',
  'ResearchElementDefinition',
  'ResearchStudy',
  'ResearchSubject',
  'RiskAssessment',
  'RiskEvidenceSynthesis',
  'Schedule',
  'SearchParameter',
  'ServiceRequest',
  'Slot',
  'SmartAppLaunch',
  'Specimen',
  'SpecimenDefinition',
  'StructureDefinition',
  'StructureMap',
  'Subscription',
  'SubscriptionStatus',
  'Substance',
  'SubstanceNucleicAcid',
  'SubstancePolymer',
  'SubstanceProtein',
  'SubstanceReferenceInformation',
  'SubstanceSourceMaterial',
  'SubstanceSpecification',
  'SupplyDelivery',
  'SupplyRequest',
  'Task',
  'TerminologyCapabilities',
  'TestReport',
  'TestScript',
  'User',
  'UserConfiguration',
  'ValueSet',
  'VerificationResult',
  'VisionPrescription',
];

export async function run(client: PoolClient): Promise<void> {
  for (const resourceType of resourceTypes) {
    // Create new compound TSV index on (code, value) for text entries (i.e. system = 'text')
    await client.query(
      `CREATE INDEX CONCURRENTLY IF NOT EXISTS "${resourceType}_Token_text_value_idx" ON "${resourceType}_Token" USING gin ("code", to_tsvector('simple', "value")) INCLUDE ("resourceId") WHERE "system" = 'text'`
    );

    // Create new restricted (code, value) and (code, system, value) index for complementary case (i.e. system != 'text')
    await client.query(
      `CREATE INDEX CONCURRENTLY IF NOT EXISTS "${resourceType}_Token_value_idx" ON "${resourceType}_Token" USING gin ("code", "value") INCLUDE ("resourceId") WHERE "system" != 'text'`
    );
    await client.query(
      `CREATE INDEX CONCURRENTLY IF NOT EXISTS "${resourceType}_Token_system_value_idx" ON "${resourceType}_Token" USING gin ("code", "system", "value") INCLUDE ("resourceId") WHERE "system" != 'text'`
    );

    // Drop old indexes
    await client.query(`DROP INDEX CONCURRENTLY IF EXISTS "${resourceType}_Token_text_idx_tsv"`);
    await client.query(`DROP INDEX CONCURRENTLY IF EXISTS "${resourceType}_Token_code_value_idx"`);
    await client.query(`DROP INDEX CONCURRENTLY IF EXISTS "${resourceType}_Token_code_system_value_idx"`);
  }
}
