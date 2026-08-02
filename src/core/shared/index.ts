/**
 * Shared Utilities
 *
 * Common code shared between init and update commands.
 */

export {
  SKILL_NAMES,
  type SkillName,
  COMMAND_IDS,
  type CommandId,
  type ToolSkillStatus,
  type ToolVersionStatus,
  getToolsWithSkillsDir,
  getToolSkillStatus,
  getToolStates,
  extractGeneratedByVersion,
  getToolVersionStatus,
  getConfiguredTools,
  getAllToolVersionStatus,
} from './tool-detection.js';

export {
  type SkillTemplateEntry,
  type CommandTemplateEntry,
  type WorkflowGuideFile,
  getSkillTemplates,
  getCommandTemplates,
  getCommandContents,
  getWorkflowGuideFiles,
  generateSkillContent,
  generateSkillCompanionFiles,
} from './skill-generation.js';
